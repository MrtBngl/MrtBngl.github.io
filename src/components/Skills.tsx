import { Monitor, Server, Sparkles, Database } from "lucide-react";
import { skillGroups } from "../data/portfolio";
import { Reveal } from "../hooks/useReveal";

const icons = [
  <Monitor key="m" className="h-[18px] w-[18px]" />,
  <Server key="s" className="h-[18px] w-[18px]" />,
  <Sparkles key="sp" className="h-[18px] w-[18px]" />,
  <Database key="d" className="h-[18px] w-[18px]" />,
];

const iconStyles = [
  "bg-violet-500/10 text-violet-200 border-violet-400/20",
  "bg-indigo-500/10 text-indigo-200 border-indigo-400/20",
  "bg-emerald-400/10 text-emerald-200 border-emerald-400/20",
  "bg-amber-400/10 text-amber-200 border-amber-400/20",
];

export default function Skills() {
  return (
    <section id="beceriler" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-zinc-500">
              <span className="text-emerald-400">—</span> Beceriler
            </p>
            <h2 className="mt-2 text-[28px] font-extrabold tracking-tight text-white sm:text-[36px]">
              Teknik beceriler
            </h2>
            <p className="mt-2.5 text-[15px] leading-relaxed text-zinc-400">
              Projelerde aktif kullandığım teknolojiler — mimarilerde neyin nerede durduğunu kartlarda görebilirsiniz.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 70}>
              <div className="card card-soft-glow h-full p-6">
                <div className="flex items-center gap-3">
                  <span className={`grid h-10 w-10 place-items-center rounded-xl border ${iconStyles[i % 4]}`}>
                    {icons[i % 4]}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold text-white">{g.title}</h3>
                    <p className="text-[12.5px] text-zinc-500">{g.desc}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-[12.5px] text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
