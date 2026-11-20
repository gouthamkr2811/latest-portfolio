import { profile, navLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500">
            &copy; 2026 {profile.name}
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
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
