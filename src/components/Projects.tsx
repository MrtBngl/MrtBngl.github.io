import { useEffect, useState } from "react";
import { ArrowUpRight, X, GitBranch, Cpu, ShieldCheck, Map as MapIcon, Braces, ImagePlus } from "lucide-react";
import { projects, profile, type ProjectDetail } from "../data/portfolio";
import { GithubIcon } from "./icons";
import { Reveal } from "../hooks/useReveal";

const badgeStyles: Record<ProjectDetail["badgeColor"], string> = {
  violet: "border-violet-400/25 bg-violet-500/10 text-violet-200",
  emerald: "border-emerald-400/25 bg-emerald-400/10 text-emerald-200",
  indigo: "border-indigo-400/25 bg-indigo-500/10 text-indigo-200",
  amber: "border-amber-400/25 bg-amber-400/10 text-amber-200",
};

const dotColors: Record<ProjectDetail["badgeColor"], string> = {
  violet: "bg-violet-300",
  emerald: "bg-emerald-300",
  indigo: "bg-indigo-300",
  amber: "bg-amber-300",
};

const cardGlow: Record<ProjectDetail["badgeColor"], string> = {
  violet: "card-soft-glow",
  emerald: "card-soft-glow-emerald",
  indigo: "card-soft-glow",
  amber: "card-soft-glow-emerald",
};

const projectIcons: Record<string, React.ReactNode> = {
  conflux: <Braces className="h-4 w-4" />,
  pisas: <GitBranch className="h-4 w-4" />,
  geopulse: <MapIcon className="h-4 w-4" />,
  privcloud: <ShieldCheck className="h-4 w-4" />,
};

export default function Projects() {
  const [active, setActive] = useState<ProjectDetail | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  const contactAbout = (proje: string) => {
    setActive(null);
    setTimeout(() => {
      const el = document.getElementById("iletisim");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const ta = document.getElementById("iletisim-mesaj") as HTMLTextAreaElement | null;
        if (ta) {
          ta.value = `Merhaba Murat, ${proje} mimarisi hakkında konuşmak istiyorum. ...`;
          ta.focus();
        }
      }, 600);
    }, 80);
  };

  return (
    <section id="projeler" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-zinc-500">
              <span className="text-emerald-400">—</span> Projeler · mühendislik vitrini
            </p>
            <h2 className="mt-2 text-[28px] font-extrabold tracking-tight text-white sm:text-[36px]">
              Geliştirdiğim mimariler
            </h2>
            <p className="mt-2.5 text-[15px] leading-relaxed text-zinc-400">
              Burası bir ürün kataloğu değil — her kart, benim tasarlayıp kodladığım mimariyi ve
              çözdüğüm teknik problemi anlatır. Detaya girin, kararları görün.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 80}>
              <article className={`card flex h-full flex-col overflow-hidden ${cardGlow[p.badgeColor]}`}>
                {/* ——— ANA GÖRSEL ALANI (16:9) ———
                    Görseli public/images/ klasörüne koyun (örn. conflux.png)
                    ve src/data/portfolio.ts içindeki `image` yolunu güncelleyin. */}
                <ProjectCover project={p} />
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11.5px] font-semibold ${badgeStyles[p.badgeColor]}`}
                  >
                    {projectIcons[p.id]}
                    {p.badge}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-600">
                    {p.index} · {p.category}
                  </span>
                </div>

                <h3 className="mt-4 text-[18px] font-bold leading-snug tracking-tight text-white sm:text-[20px]">
                  {p.fullName}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-zinc-400">{p.summary}</p>

                {/* teknik odak — mühendis etiketi */}
                <div className="mt-4">
                  <p className="font-mono text-[10.5px] uppercase tracking-widest text-zinc-600">teknik odak</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.techFocus.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-black/50 px-2.5 py-1 font-mono text-[11.5px] text-zinc-200"
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${dotColors[p.badgeColor]}`} />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/[0.07] pt-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2 py-0.5 font-mono text-[11px] text-zinc-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* rol özeti */}
                <p className="mt-4 line-clamp-2 border-l-2 border-white/10 pl-3 text-[12.5px] italic leading-relaxed text-zinc-500">
                  Benim rolüm: {p.role}
                </p>

                <div className="mt-5 flex gap-2.5 pt-1">
                  <button
                    onClick={() => setActive(p)}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white px-5 py-2.5 text-[13.5px] font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                  >
                    Mimariyi İncele
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} GitHub`}
                    className="grid w-[46px] place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
                  >
                    <GithubIcon className="h-[18px] w-[18px]" />
                  </a>
                </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-5 flex flex-col gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[12px] leading-relaxed text-zinc-500">
              <Cpu className="mr-1.5 inline h-3.5 w-3.5 text-zinc-500" />
              Deneyler, n8n şablonları ve küçük araçlar GitHub'da.
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 text-[13px] font-medium text-zinc-300 transition-colors hover:text-white"
            >
              <GithubIcon className="h-4 w-4" /> Tüm repolar
            </a>
          </div>
        </Reveal>
      </div>

      {/* Detay modalı — mühendislik vakası */}
      {active && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal>
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={() => setActive(null)} />
          <div className="card relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl p-6 sm:rounded-2xl sm:p-8">
            <button
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:text-white"
              aria-label="Kapat"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-wrap items-center gap-2 pr-10">
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11.5px] font-semibold ${badgeStyles[active.badgeColor]}`}>
                {projectIcons[active.id]}
                {active.badge}
              </span>
              <span className="font-mono text-[11px] text-zinc-600">
                {active.index} · {active.category}
              </span>
            </div>
            <h3 className="mt-3 text-[20px] font-bold leading-snug tracking-tight text-white sm:text-[22px]">
              {active.fullName}
            </h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-zinc-400">{active.summary}</p>

            {/* Problem */}
            <div className="mt-6">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-red-300/90">
                <span className="h-px w-4 bg-red-300/40" /> Problem
              </p>
              <p className="mt-2 rounded-xl border border-white/[0.07] bg-black/40 px-4 py-3.5 text-[13.5px] leading-relaxed text-zinc-300">
                {active.problem}
              </p>
            </div>

            {/* Benim rolüm */}
            <div className="mt-5">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-emerald-300">
                <span className="h-px w-4 bg-emerald-300/40" /> Benim rolüm / katkım
              </p>
              <p className="mt-2 text-[13.5px] font-medium leading-relaxed text-zinc-200">{active.role}</p>
              <ul className="mt-3 space-y-2">
                {active.rolePoints.map((r, ri) => (
                  <li key={ri} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-zinc-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mimari */}
            <div className="mt-5">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-violet-300">
                <span className="h-px w-4 bg-violet-300/40" /> Çözüm & mimari
              </p>
              <ol className="mt-3 space-y-2">
                {active.architecture.map((a, ai) => (
                  <li key={ai} className="flex gap-3 rounded-xl border border-white/[0.07] bg-black/40 px-4 py-3">
                    <span className="font-mono text-[12px] font-bold text-zinc-500">{String(ai + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="text-[13.5px] font-semibold text-white">{a.title}</p>
                      <p className="mt-0.5 text-[12.5px] leading-relaxed text-zinc-400">{a.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Teknik odak + teknolojiler */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                <p className="font-mono text-[10.5px] uppercase tracking-widest text-zinc-500">teknik odak</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {active.techFocus.map((t) => (
                    <span key={t} className="rounded-md bg-white/[0.06] px-2.5 py-1 font-mono text-[11.5px] text-zinc-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                <p className="font-mono text-[10.5px] uppercase tracking-widest text-zinc-500">teknolojiler</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {active.tech.map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[11px] text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <button
                onClick={() => contactAbout(active.name)}
                className="flex-1 rounded-xl bg-white px-5 py-2.5 text-[13.5px] font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
              >
                Bu mimari hakkında konuşalım →
              </button>
              <a
                href={active.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-[13.5px] text-zinc-200 hover:bg-white/10"
              >
                <GithubIcon className="h-4 w-4" /> Kodu gör
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ProjectCover({ project }: { project: ProjectDetail }) {
  const [failed, setFailed] = useState(false);
  const showImage = project.image && !failed;

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/[0.07] bg-[#0b0b0f]">
      {/* placeholder zemin — görsel eklenene kadar görünür */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,rgba(139,92,246,0.10),transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-400">
          <ImagePlus className="h-5 w-5" />
        </span>
        <p className="text-[13px] font-semibold text-zinc-300">{project.name} — ana görsel</p>
        <p className="font-mono text-[10.5px] text-zinc-600">
          16:9 · <span className="text-zinc-500">{project.image}</span> yoluna koyun
        </p>
      </div>

      {/* gerçek görsel — dosya eklendiğinde otomatik görünür */}
      {showImage && (
        <img
          src={project.image}
          alt={`${project.name} ana görsel`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      )}

      {/* index rozeti */}
      <span className="absolute left-3 top-3 rounded-md border border-white/10 bg-black/60 px-2 py-1 font-mono text-[10px] text-zinc-300 backdrop-blur">
        {project.index}
      </span>
    </div>
  );
}
