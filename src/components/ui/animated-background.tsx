"use client";

import { useEffect, useRef } from "react";

// Delaunay-like triangulation: connect points to form triangles
function triangulate(
  pts: { x: number; y: number }[],
  w: number,
  h: number
) {
  // Greedy triangulation: connect each point to its nearest neighbors
  // to form a mesh. We create triangles by connecting each point to
  // the 3-4 closest points that form valid triangles.
  const edges: Set<string> = new Set();
  const key = (a: number, b: number) =>
    a < b ? `${a}-${b}` : `${b}-${a}`;

  for (let i = 0; i < pts.length; i++) {
    // Find closest neighbors
    const neighbors = pts
      .map((p, j) => ({ j, dist: Math.hypot(p.x - pts[i].x, p.y - pts[i].y) }))
      .filter((n) => n.j !== i)
      .sort((a, b) => a.dist - b.dist)
      .slice(0, 4); // Connect to 4 nearest

    for (const n of neighbors) {
      edges.add(key(i, n.j));
    }
  }

  return edges;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let points: { x: number; y: number }[] = [];

    function generatePoints(w: number, h: number) {
      const pts: { x: number; y: number }[] = [];

      // Concentrate points near edges for wireframe-from-edges look
      const edgeDensity = 0.7; // 70% of points near edges
      const innerDensity = 0.3; // 30% scattered inside

      const totalPoints = Math.min(Math.round((w * h) / 40000), 60);
      const edgeCount = Math.round(totalPoints * edgeDensity);
      const innerCount = totalPoints - edgeCount;

      // Edge points — clustered along the perimeter
      for (let i = 0; i < edgeCount; i++) {
        const edge = Math.floor(Math.random() * 4); // 0=top, 1=right, 2=bottom, 3=left
        const t = Math.random();
        const spread = 0.08 * Math.min(w, h); // how far from edge

        switch (edge) {
          case 0: // top
            pts.push({ x: t * w, y: Math.random() * spread });
            break;
          case 1: // right
            pts.push({ x: w - Math.random() * spread, y: t * h });
            break;
          case 2: // bottom
            pts.push({ x: t * w, y: h - Math.random() * spread });
            break;
          case 3: // left
            pts.push({ x: Math.random() * spread, y: t * h });
            break;
        }
      }

      // Inner points — sparse, wide distribution
      for (let i = 0; i < innerCount; i++) {
        pts.push({
          x: Math.random() * w,
          y: Math.random() * h,
        });
      }

      return pts;
    }

    function drawScene(w: number, h: number) {
      if (!ctx || !canvas) return;

      // --- 1. Midnight navy matte background ---
      const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.7);
      grad.addColorStop(0, "#0d1225");
      grad.addColorStop(0.5, "#0a0e1e");
      grad.addColorStop(1, "#060914");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Subtle vignette overlay
      const vignette = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.5);
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(1, "rgba(0,0,0,0.3)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);

      // --- 2. Generate edge-concentrated points ---
      points = generatePoints(w, h);

      // --- 3. Triangulate ---
      const edges = triangulate(points, w, h);

      // --- 4. Draw wireframe triangles ---
      const neonBlue = "rgba(79, 195, 247,";
      const edgeArray = Array.from(edges).map((k) => {
        const [a, b] = k.split("-").map(Number);
        return { a, b };
      });

      // First pass: soft glow (wider, more transparent lines)
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (const { a, b } of edgeArray) {
        const p1 = points[a];
        const p2 = points[b];
        const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
        const maxDist = Math.min(w, h) * 0.35;
        if (dist > maxDist) continue;

        const alpha = (1 - dist / maxDist) * 0.06;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `${neonBlue}${alpha})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }

      // Second pass: thin crisp lines
      for (const { a, b } of edgeArray) {
        const p1 = points[a];
        const p2 = points[b];
        const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
        const maxDist = Math.min(w, h) * 0.35;
        if (dist > maxDist) continue;

        const alpha = (1 - dist / maxDist) * 0.12;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `${neonBlue}${alpha})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }

      // --- 5. Subtle vertex dots ---
      for (const p of points) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `${neonBlue}0.08)`;
        ctx.fill();
      }
    }

    function handleResize() {
      if (!canvas) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      drawScene(w, h);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
