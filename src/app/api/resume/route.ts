import { NextResponse } from "next/server";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export async function GET() {
  const doc = await PDFDocument.create();
  const page = doc.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();

  const font = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const primary = rgb(0.39, 0.4, 0.95); // #6366f1
  const dark = rgb(0.07, 0.09, 0.15); // #111827
  const gray = rgb(0.42, 0.44, 0.5); // #6b7280

  const margin = 55;
  const pageWidth = width - margin * 2;
  let y = height - margin;

  function addText(
    text: string,
    size: number,
    color: typeof dark,
    bold = false,
    align: "left" | "right" = "left"
  ) {
    const f = bold ? fontBold : font;
    const textWidth = f.widthOfTextAtSize(text, size);
    let x = margin;
    if (align === "right") x = width - margin - textWidth;
    page.drawText(text, { x, y, size, font: f, color });
  }

  function addWrappedText(text: string, size: number, color: typeof dark, bold = false) {
    const f = bold ? fontBold : font;
    const words = text.split(" ");
    let line = "";
    for (const word of words) {
      const test = line ? line + " " + word : word;
      if (f.widthOfTextAtSize(test, size) > pageWidth) {
        page.drawText(line, { x: margin, y, size, font: f, color });
        y -= size * 1.4;
        line = word;
      } else {
        line = test;
      }
    }
    if (line) {
      page.drawText(line, { x: margin, y, size, font: f, color });
      y -= size * 1.4;
    }
  }

  // ── Header ──
  addText("Ashfak Seinudeen", 28, dark, true);
  y -= 32;
  addText("Software Engineering Intern", 12, gray);
  y -= 18;

  // Contact bar
  addText(
    "ashfakseinudeen@gmail.com  |  +94 786862100  |  Kurunegala, Sri Lanka  |  github.com/DevWith-Ashfak",
    8,
    gray
  );
  y -= 14;

  // Separator
  y -= 4;
  page.drawLine({
    start: { x: margin, y },
    end: { x: margin + pageWidth, y },
    thickness: 1,
    color: rgb(0.9, 0.91, 0.92),
  });
  y -= 16;

  // ── Professional Summary ──
  addText("Professional Summary", 12, primary, true);
  y -= 18;

  addWrappedText(
    "Full-stack developer building shipped products with React, Node.js, Java & Spring Boot. " +
      "3rd-year IT undergraduate at SLIIT, Sri Lanka. Passionate about clean architecture, " +
      "performance, and delivering great user experiences across web and mobile platforms.",
    10,
    dark
  );
  y -= 10;

  // ── Education ──
  addText("Education", 12, primary, true);
  y -= 18;

  addText("SLIIT", 10.5, dark, true);
  addText(" | 2024 - Present", 10.5, gray, false, "right");
  y -= 14;
  addText("Bachelor of Science Honours in Information Technology", 9.5, gray);
  y -= 12;
  addText("Year 3, Semester 1", 9.5, gray);
  y -= 16;

  addText("Kekunagolla National School", 10.5, dark, true);
  y -= 14;
  addText("GCE A/L - Physics B, Chemistry B, Biology C", 9.5, gray);
  y -= 20;

  // ── Technical Skills ──
  addText("Technical Skills", 12, primary, true);
  y -= 18;

  const skillsData: [string, string][] = [
    ["Languages", "Java, JavaScript, TypeScript, Python"],
    ["Frontend", "React, Next.js, Tailwind CSS"],
    ["Backend", "Spring Boot, Node.js, Express.js"],
    ["Databases", "MySQL, MongoDB, MSSQL"],
    ["Mobile", "React Native"],
    ["ML & Data Science", "Scikit-learn, Pandas, NumPy, TensorFlow, Keras"],
    ["Tools", "Git, GitHub, Docker (learning), AWS (learning)"],
  ];
  for (const [cat, items] of skillsData) {
    addText(`${cat}: `, 10, dark, true);
    page.drawText(items, { x: margin + fontBold.widthOfTextAtSize(`${cat}: `, 10), y, size: 10, font, color: gray });
    y -= 14;
  }
  y -= 6;

  // ── Projects ──
  addText("Projects", 12, primary, true);
  y -= 18;

  const projects: [string, string, string][] = [
    [
      "Resume Tailor",
      "AI Resume Tailoring Platform",
      "AI-powered platform analyzing resumes against job descriptions. Features: keyword matching, skill gap analysis, cover letter generation. Stack: Next.js, Express, TypeScript, Tailwind.",
    ],
    [
      "Ceylon Explorer",
      "Tourism Super App",
      "End-to-end tourism platform with itinerary planning, cultural discovery, and map services. Backend APIs, JWT auth, Leaflet maps. Stack: Spring Boot, React, TypeScript.",
    ],
    [
      "Lanka Eats",
      "Food Delivery Mobile App",
      "Real-time delivery tracking & order management. Backend development with delivery logic. Stack: React Native, Node.js, Express, MongoDB.",
    ],
    [
      "Customer Segmentation (ML)",
      "Unsupervised ML Analytics",
      "K-Means clustering for customer behavior analysis. Feature engineering, PCA visualization. Stack: Python, Scikit-learn, Pandas.",
    ],
    [
      "Student Depression Prediction (ML)",
      "Predictive ML System",
      "Supervised learning for early identification of at-risk students. SMOTE for class imbalance. Stack: Python, Scikit-learn, Pandas.",
    ],
  ];

  for (const [title, subtitle, desc] of projects) {
    addText(title, 10.5, dark, true);
    y -= 12;
    addText(subtitle, 9.5, gray);
    y -= 12;
    addWrappedText(desc, 9, gray);
    y -= 10;
  }

  // ── Certifications ──
  addText("Certifications", 12, primary, true);
  y -= 18;
  addText("Google Certification", 10, dark);
  y -= 16;

  // ── Achievements ──
  addText("Achievements", 12, primary, true);
  y -= 18;
  const achievements = [
    "5+ production projects shipped",
    "15+ technologies across full stack",
    "REST API design & development",
    "Cross-platform mobile & web applications",
  ];
  for (const a of achievements) {
    addText(`  ${a}`, 10, dark);
    y -= 14;
  }

  // Footer
  y = 40;
  addText("Available for Software Engineering Internship opportunities.", 8, gray);

  const pdfBytes = await doc.save();
  const buffer = Buffer.from(pdfBytes);

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="Ashfak_Seinudeen_Resume.pdf"',
      "Content-Length": buffer.length.toString(),
    },
  });
}
