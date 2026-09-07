import { Menu } from "lucide-react";

const links = ["Platform", "Solutions", "Features", "Resources", "Pricing"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 font-bold text-white">
            N
          </span>
          <span className="text-xl font-bold tracking-tight text-slate-900">noveqix</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link}>
              <a href="#" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="#" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
            Sign in
          </a>
          <a
            href="#"
            className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            Get Started
          </a>
        </div>

        <button className="lg:hidden" aria-label="Open menu">
          <Menu className="h-6 w-6 text-slate-700" />
        </button>
      </nav>
    </header>
  );
}
