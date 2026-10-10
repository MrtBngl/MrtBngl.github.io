import { GraduationCap, Server, Plug, GitBranch } from "lucide-react";
import { principles } from "../data/portfolio";
import { Reveal } from "../hooks/useReveal";

const focusCards = [
  {
    title: "Arka Plan Mimarileri",
    desc: "Servis sınırları, veri modelleri ve kuyruk tasarımıyla ilgileniyorum — önyüzden önce akışın doğru kurulması gerektiğine inanıyorum.",
    icon: <Server className="h-4 w-4" />,
    cls: "bg-violet-500/10 text-violet-200",
  },
  {
    title: "API Entegrasyonları",
    desc: "Gemini, WhatsApp Cloud, Twilio: her entegrasyonu sözleşmesi, hata yolu ve retry politikasıyla ele alıyorum.",
    icon: <Plug className="h-4 w-4" />,
    cls: "bg-indigo-500/10 text-indigo-200",
  },
  {
    title: "Event-Driven Sistemler",
    desc: "Webhook + kuyruk + idempotency üçlüsü. Kaybolan olay yok, iki kez işlenen kayıt yok — hedefim bu.",
    icon: <GitBranch className="h-4 w-4" />,
    cls: "bg-emerald-400/10 text-emerald-200",
  },
  {
    title: "Mezun + Üretici",
    desc: "Dumlupınar'da edindiğim teoriyi projelerde pratiğe dönüştürüyorum. Her çeyrekte en az bir mimariyi uçtan uca bitirme hedefim var.",
    icon: <GraduationCap className="h-4 w-4" />,
    cls: "bg-amber-400/10 text-amber-200",
  },
];

export default function About() {
  return (
    <section id="hakkimda" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-zinc-500">
            <span className="text-emerald-400">—</span> Hakkımda
          </p>
          <h2 className="mt-2 max-w-2xl text-[28px] font-extrabold leading-tight tracking-tight text-white sm:text-[36px]">
            Bilgisayar Programcılığı mezunu, <span className="text-gradient">arka plan odaklı</span> geliştirici.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1fr]">
          {/* sol: kişisel profil */}
          <Reveal>
            <div className="card card-topline flex h-full flex-col p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-emerald-500 text-[17px] font-extrabold text-white">
                  MB
                </div>
                <div>
                  <p className="text-[15px] font-bold text-white">Murat Bingöl</p>
                  <p className="text-[13px] text-zinc-500">Full-Stack & Otomasyon Geliştiricisi</p>
                  <p className="mt-1 font-mono text-[11px] text-zinc-500">
                    Dumlupınar Üni. · Bilgisayar Programcılığı
                  </p>
                </div>
              </div>
              <div className="mt-5 space-y-3.5 text-[14.5px] leading-relaxed text-zinc-400">
                <p>
                  <span className="font-semibold text-zinc-100">
                    Dumlupınar Üniversitesi Bilgisayar Programcılığı mezunuyum.
                  </span>{" "}
                  Eğitimde veri yapıları ve veritabanı temeli edindim, ardından gerçek sistemler
                  kurmaya odaklandım: WhatsApp'tan gelen bir mesajın veritabanında randevuya dönüştüğü hatlar,
                  kodu satır satır inceleyen analiz motorları.
                </p>
                <p>
                  En çok keyif aldığım yer <span className="text-zinc-200">arka plan</span>: API
                  sözleşmeleri, webhook akışları, tenant izolasyonu, spatial indexler. Arayüzü sade
                  tutarım — karmaşıklık görünmez katmanda, güvenilirlikte olmalı.
                </p>
                <p>
                  Hedefim net: <span className="font-mono text-[13px] text-zinc-200">öğren → inşa et → dokümante et</span>{" "}
                  döngüsüyle, event-driven sistemlerde uzmanlaşan bir mühendis olmak.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
                {[
                  ["DPU Mezunu", "Eğitim"],
                  ["Backend + AI", "Odak"],
                  ["TR · Uzaktan", "Konum"],
                ].map(([v, l]) => (
                  <div key={l} className="bg-[#0d0d11] px-3 py-3 text-center">
                    <p className="text-[12.5px] font-semibold text-white">{v}</p>
                    <p className="mt-0.5 font-mono text-[10.5px] text-zinc-500">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* sağ: odak + ilkeler */}
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              {focusCards.map((t, i) => (
                <Reveal key={t.title} delay={i * 60}>
                  <div className="card card-soft-glow h-full p-5">
                    <div className="flex items-center gap-2.5">
                      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${t.cls}`}>
                        {t.icon}
                      </span>
                      <p className="text-[13px] font-bold leading-tight text-white">{t.title}</p>
                    </div>
                    <p className="mt-2.5 text-[12.5px] leading-relaxed text-zinc-400">{t.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="card p-5 sm:p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                  Nasıl çalışırım
                </p>
                <div className="mt-3 space-y-3">
                  {principles.map((pr, i) => (
                    <div
                      key={pr.title}
                      className="flex gap-3 border-t border-white/[0.06] pt-3 first:border-0 first:pt-0"
                    >
                      <span className="font-mono text-[11px] font-bold text-emerald-300">0{i + 1}</span>
                      <div>
                        <p className="text-[13.5px] font-semibold text-white">{pr.title}</p>
                        <p className="mt-0.5 text-[12.5px] leading-relaxed text-zinc-400">{pr.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
