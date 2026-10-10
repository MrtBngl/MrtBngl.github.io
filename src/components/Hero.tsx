import { ArrowRight, Download, MapPin, GraduationCap } from "lucide-react";
import { profile } from "../data/portfolio";
import { Reveal } from "../hooks/useReveal";

function downloadResume() {
  const content = `MURAT BINGÖL — Full-Stack & Otomasyon Geliştiricisi
${profile.education}
${profile.location} · ${profile.email}
GitHub: ${profile.github} · LinkedIn: ${profile.linkedin}

ÖZET
${profile.intro}

ÖNE ÇIKAN PROJELER
• ConFlux — AI Code Review & UI Sandbox
  Rol: 3 panelli IDE tasarımı, dosya parsing + Gemini statik analiz motoru.
  Odak: AST, Monaco Editor, Iframe Sandbox, LLM Entegrasyonu.
• Pisas — WhatsApp & Gemini AI Otomasyon Motoru
  Rol: Formsuz entity extraction + event-driven mimari, multi-tenant veri akışı.
  Odak: WhatsApp Cloud API, Node.js/Express, MongoDB Atlas, Webhook yönetimi.
• geopulse-tr — Coğrafi & Bölgesel Veri Analiz Platformu
  Rol: GeoJSON işleme + hızlı konum sorguları için backend servisleri.
  Odak: Spatial Indexing, GeoJSON, 2dsphere.
• PrivCloud — Güvenli Bulut & Dosya Yönetim Mimarisi
  Rol: RBAC, şifreli transfer, güvenli veritabanı mimarisi.
  Teknolojiler: Node.js, Express, MongoDB/SQL, Authentication, Cloud Storage.

DURUM: ${profile.availability}
`;
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Murat-Bingol-CV.txt";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export default function Hero() {
  return (
    <section id="top" className="relative pb-14 pt-[108px] sm:pb-20 sm:pt-[128px]">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* sol — kişisel kimlik */}
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-3.5 py-1.5 text-[12px] font-medium text-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {profile.availability}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[12px] text-zinc-400">
                  <GraduationCap className="h-3.5 w-3.5 text-zinc-500" />
                  {profile.education}
                </span>
              </div>
            </Reveal>

            <Reveal delay={70}>
              <p className="mt-5 font-mono text-[12.5px] tracking-wide text-zinc-500">
                <span className="text-emerald-300">merhaba, ben</span> Murat Bingöl — Full-Stack & Otomasyon Geliştiricisi
              </p>
              <h1 className="mt-3 text-[32px] font-extrabold leading-[1.14] tracking-[-0.02em] text-white sm:text-[42px] sm:leading-[1.12]">
                Yapay Zeka Destekli Sistemler, Otomasyon Motorları ve Geliştirici Araçları{" "}
                <span className="text-zinc-500">(DevTools)</span>{" "}
                <span className="text-gradient">Geliştiriyorum.</span>
              </h1>
            </Reveal>

            <Reveal delay={130}>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-zinc-400 sm:text-[16px]">
                {profile.intro}
              </p>
              <p className="mt-3 flex max-w-xl items-center gap-1.5 font-mono text-[12px] text-zinc-500">
                <MapPin className="h-3.5 w-3.5" />
                {profile.location} · arka plan mimarileri · API entegrasyonları · event-driven sistemler
              </p>
            </Reveal>

            <Reveal delay={190}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#projeler"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-[14px] font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                >
                  Mimarileri İncele
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <div className="flex gap-3">
                  <button
                    onClick={downloadResume}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-[14px] font-semibold text-zinc-100 transition-colors hover:border-white/25 hover:bg-white/[0.07] sm:flex-none"
                  >
                    <Download className="h-4 w-4 text-zinc-400" />
                    CV İndir
                  </button>
                  <a
                    href="#iletisim"
                    className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-[14px] font-medium text-zinc-400 transition-colors hover:text-white"
                  >
                    İletişim
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <dl className="mt-9 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
                {[
                  ["4", "Mimari vaka analizi"],
                  ["Event", "Odaklı tasarım"],
                  ["Uçtan uca", "Backend + AI"],
                ].map(([v, l]) => (
                  <div key={l} className="bg-[#0d0d11] px-4 py-3.5">
                    <dt className="sr-only">{l}</dt>
                    <dd className="font-mono text-[15px] font-bold text-white">{v}</dd>
                    <dd className="mt-0.5 text-[11.5px] text-zinc-500">{l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* sağ — projelerden bağımsız genel otomasyon hattı */}
          <Reveal delay={160}>
            <div className="card card-soft-glow card-topline overflow-hidden">
              <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.02] px-4 py-3">
                <span className="flex gap-1.5">
                  <i className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <i className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <i className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                </span>
                <span className="ml-2 font-mono text-[11.5px] text-zinc-400">automation — pipeline.ts</span>
                <span className="ml-auto rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-zinc-300">
                  event-driven
                </span>
              </div>

              <div className="border-b border-white/[0.07] p-4 font-mono text-[12px] leading-[1.75]">
                <div className="mb-2 flex items-center justify-between text-[10.5px] text-zinc-600">
                  <span>src/core/pipeline.ts</span>
                  <span className="rounded bg-white/5 px-1.5 py-0.5">genel hat</span>
                </div>
                <pre className="overflow-x-auto">
                  <code>
                    <span className="text-zinc-600">1 </span>
                    <span className="text-violet-300">type</span> <span className="text-zinc-200">Olay</span>
                    <span className="text-zinc-400"> = {"{ id: string; tur: string; veri: unknown }"}</span>
                    {"\n"}
                    <span className="text-zinc-600">2 </span>
                    <span className="text-violet-300">export async function</span>{" "}
                    <span className="text-indigo-300">olayiIsle</span>
                    <span className="text-zinc-300">(olay: Olay)</span> {"{"}
                    {"\n"}
                    <span className="text-zinc-600">3 </span>
                    <span className="text-zinc-500">{"  // tekrar işlenmeyi önle"}</span>
                    {"\n"}
                    <span className="text-zinc-600">4 </span>
                    <span className="text-zinc-300">{"  if (await gorulduMu(olay.id))"}</span>{" "}
                    <span className="text-violet-300">return</span>
                    <span className="text-zinc-300">{" { durum: 'tekrar' }"}</span>
                    {"\n"}
                    <span className="text-zinc-600">5 </span>
                    <span className="text-violet-300">{"  const"}</span>
                    <span className="text-zinc-200">{" temiz "}</span>
                    <span className="text-zinc-400">=</span>
                    <span className="text-violet-300">{" await "}</span>
                    <span className="text-indigo-300">dogrula</span>
                    <span className="text-zinc-300">(olay.veri)</span>
                    {"\n"}
                    <span className="text-zinc-600">6 </span>
                    <span className="bg-emerald-400/10 text-emerald-200">{"  + const zengin = await ai.zenginlestir(temiz)"}</span>
                    {"\n"}
                    <span className="text-zinc-600">7 </span>
                    <span className="text-zinc-300">{"  await kaydet(zengin); return dagit(zengin)"}</span>
                    {"\n"}
                    <span className="text-zinc-600">8 </span>
                    <span className="text-zinc-300">{"}"}</span>
                  </code>
                </pre>
              </div>

              <div className="bg-gradient-to-b from-white/[0.03] to-transparent p-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-[13px] font-bold text-zinc-200">
                    ✦
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-white">Otomasyon Hattı</p>
                    <p className="font-mono text-[11px] text-zinc-500">olay → doğrulama → zenginleştir → dağıtım</p>
                  </div>
                  <span className="ml-auto rounded-md bg-emerald-400/10 px-2 py-1 font-mono text-[11px] font-semibold text-emerald-300">
                    tip güvenli
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2 border-t border-white/[0.07] pt-3 font-mono text-[11px] text-zinc-500">
                  <span className="rounded bg-white/5 px-2 py-1">webhook</span>
                  <span className="rounded bg-white/5 px-2 py-1">queue</span>
                  <span className="rounded bg-white/5 px-2 py-1">worker</span>
                  <span className="ml-auto">framework bağımsız</span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center font-mono text-[11px] text-zinc-600">
              Genel otomasyon hattı — statik ön izleme
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
