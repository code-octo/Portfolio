import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative z-10 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-text">404</h1>
        <p className="mt-4 text-lg text-text-secondary">
          Page not found
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
