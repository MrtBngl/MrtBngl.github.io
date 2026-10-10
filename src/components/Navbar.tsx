import { useEffect, useState } from "react";
import { Mail, Menu, X, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile, navLinks } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const ids = ["hakkimda", "projeler", "beceriler", "iletisim"];
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 180) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled
            ? "border-white/10 bg-[#09090b]/85 backdrop-blur-xl"
            : "border-white/[0.06] bg-[#09090b]/60 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          {/* marka */}
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-gradient-to-br from-zinc-900 to-black">
              <Terminal className="h-[18px] w-[18px] text-emerald-300" strokeWidth={2.2} />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-[15px] font-bold tracking-tight text-white">
                {profile.name}
              </span>
              <span className="block truncate text-[11.5px] text-zinc-500">{profile.title}</span>
            </span>
          </a>

          {/* masaüstü linkler */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`rounded-lg px-3.5 py-2 text-[13.5px] transition-colors ${
                  active === l.href.slice(1)
                    ? "bg-white/[0.06] text-white"
                    : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* aksiyonlar */}
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1.5 sm:flex">
              <IconBtn href={profile.github} label="GitHub">
                <GithubIcon className="h-4 w-4" />
              </IconBtn>
              <IconBtn href={profile.linkedin} label="LinkedIn">
                <LinkedinIcon className="h-4 w-4" />
              </IconBtn>
              <IconBtn href={`mailto:${profile.email}`} label="E-posta">
                <Mail className="h-4 w-4" />
              </IconBtn>
            </div>
            <a
              href="#iletisim"
              className="ml-1 hidden items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-[12.5px] font-semibold text-emerald-200 transition-all hover:border-emerald-400/40 hover:bg-emerald-400/[0.15] md:inline-flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {profile.availability}
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-300 lg:hidden"
              aria-label="Menü"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* mobil menü */}
        <div className={`overflow-hidden transition-all duration-300 lg:hidden ${open ? "max-h-[380px]" : "max-h-0"}`}>
          <div className="space-y-1 border-t border-white/[0.07] px-4 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-[14px] text-zinc-300 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#iletisim"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2.5 text-[13px] font-semibold text-emerald-200"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {profile.availability}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function IconBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
    >
      {children}
    </a>
  );
}
