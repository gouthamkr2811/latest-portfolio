import { profile, navLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl relative z-10">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="font-mono text-base font-bold tracking-widest text-emerald-400">
              {profile.monogram}
            </span>
            <span className="text-zinc-600">|</span>
            <p className="text-xs sm:text-sm text-zinc-400">
              &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-zinc-400 transition-colors hover:text-emerald-300 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-xs sm:text-sm text-emerald-400 transition-colors hover:text-emerald-300 font-semibold"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
