import { useState } from "react";
import { Copy, Check, Mail, ArrowUp, ArrowUpRight, Send, MessageCircle } from "lucide-react";
import { profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Reveal } from "../hooks/useReveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", type: "Tam Zamanlı Rol", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = profile.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${form.type}] ${form.name || "Yeni iletişim"} — portfolyo`);
    const body = encodeURIComponent(`Merhaba Murat,\n\n${form.message}\n\n— ${form.name} (${form.email})\nKonu: ${form.type}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <>
      <section id="iletisim" className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="card card-topline overflow-hidden">
              <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_1fr] lg:p-12">
                {/* sol */}
                <div>
                  <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-zinc-500">
                    <span className="text-emerald-400">—</span> İletişim
                  </p>
                  <h2 className="mt-2 text-[28px] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[38px]">
                    Birlikte etkili bir şeyler <span className="text-gradient">inşa edelim.</span>
                  </h2>
                  <p className="mt-3.5 max-w-md text-[14.5px] leading-relaxed text-zinc-400">
                    DevTool fikriniz, WhatsApp otomasyonunuz veya MVP'niz mi var? Hızlı dönerim, net
                    kapsam çıkarırım, günler içinde prototip gösteririm.
                  </p>

                  <button
                    onClick={copyEmail}
                    className="mt-6 flex w-full items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-left transition-colors hover:border-white/20"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-emerald-400/10 text-emerald-300">
                      <Mail className="h-[18px] w-[18px]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[10.5px] uppercase tracking-wider text-zinc-500">
                        {copied ? "panoya kopyalandı ✓" : "kopyalamak için tıklayın"}
                      </span>
                      <span className="block truncate text-[14px] font-semibold text-white">{profile.email}</span>
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-zinc-400">
                      {copied ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
                    </span>
                  </button>

                  <div className="mt-2.5">
                    <a
                      href={profile.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 transition-colors hover:border-white/20"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-400/10 text-emerald-300">
                        <MessageCircle className="h-[18px] w-[18px]" />
                      </span>
                      <span>
                        <span className="block font-mono text-[10.5px] uppercase tracking-wider text-zinc-500">WhatsApp</span>
                        <span className="block text-[13.5px] font-semibold text-white">
                          Hemen yazın <ArrowUpRight className="inline h-3.5 w-3.5" />
                        </span>
                      </span>
                      <span className="ml-auto hidden font-mono text-[11px] text-zinc-600 sm:block">
                        genellikle 2 saat içinde yanıt
                      </span>
                    </a>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-[13px] font-medium text-zinc-200 transition-colors hover:border-white/20 hover:text-white sm:flex-none sm:px-5"
                    >
                      <GithubIcon className="h-4 w-4" /> GitHub
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-[13px] font-medium text-zinc-200 transition-colors hover:border-white/20 hover:text-white sm:flex-none sm:px-5"
                    >
                      <LinkedinIcon className="h-4 w-4" /> LinkedIn
                    </a>
                  </div>
                </div>

                {/* sağ form */}
                <div className="rounded-xl border border-white/10 bg-black/30 p-5 sm:p-6">
                  <p className="font-mono text-[12px] text-zinc-400">
                    <span className="text-emerald-300">❯</span> hızlı mesaj
                  </p>
                  <form onSubmit={submit} className="mt-4 space-y-3">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-1.5 block text-[12px] text-zinc-500">Adınız</span>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Ad Soyad"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-[13.5px] text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-white/25"
                        />
                      </label>
                      <label className="block">
                        <span className="mb-1.5 block text-[12px] text-zinc-500">E-posta</span>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="siz@sirket.com"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-[13.5px] text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-white/25"
                        />
                      </label>
                    </div>
                    <div>
                      <span className="mb-1.5 block text-[12px] text-zinc-500">Konu</span>
                      <div className="flex flex-wrap gap-1.5">
                        {["Tam Zamanlı Rol", "ConFlux Demo", "Pisas Demo", "Otomasyon Analizi"].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setForm({ ...form, type: t })}
                            className={`rounded-full px-3 py-1.5 text-[12px] transition-colors ${
                              form.type === t
                                ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                                : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-zinc-200"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                    <label className="block">
                      <span className="mb-1.5 block text-[12px] text-zinc-500">Mesajınız</span>
                      <textarea
                        id="iletisim-mesaj"
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="3 şubemiz için haftada ~200 randevuluk bir WhatsApp akışına ihtiyacımız var…"
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-[13.5px] leading-relaxed text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-white/25"
                      />
                    </label>
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-[14px] font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
                    >
                      {sent ? (
                        <>
                          <Check className="h-4 w-4" strokeWidth={3} /> E-posta uygulamanız açılıyor…
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Mesajı gönder
                        </>
                      )}
                    </button>
                    <p className="text-center font-mono text-[11px] text-zinc-600">
                      2 saat içinde yanıt · spam yok
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* footer */}
      <footer className="relative border-t border-white/[0.07] bg-black/30">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-zinc-900 font-mono text-[12px] font-bold text-emerald-300">
                  MB
                </span>
                <div className="leading-tight">
                  <p className="text-[14px] font-bold text-white">{profile.name}</p>
                  <p className="text-[12px] text-zinc-500">{profile.title}</p>
                </div>
              </div>
              <p className="mt-3 text-[13px] leading-relaxed text-zinc-500">
                Formsuz CRM'ler, yapay zeka ajanları ve geliştirici araçları üretiyorum. Uzaktan çalışmaya açığım.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-600">Site</p>
                <ul className="mt-3 space-y-2 text-[13.5px]">
                  {[
                    ["Hakkımda", "#hakkimda"],
                    ["Projeler", "#projeler"],
                    ["Beceriler", "#beceriler"],
                    ["İletişim", "#iletisim"],
                  ].map(([l, h]) => (
                    <li key={h}>
                      <a href={h} className="text-zinc-400 transition-colors hover:text-white">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-600">Diğer</p>
                <ul className="mt-3 space-y-2 text-[13.5px]">
                  <li>
                    <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white">
                      <GithubIcon className="h-3.5 w-3.5" /> GitHub
                    </a>
                  </li>
                  <li>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white">
                      <LinkedinIcon className="h-3.5 w-3.5" /> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white">
                      <Mail className="h-3.5 w-3.5" /> E-posta
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="grid h-11 w-11 place-items-center self-start rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-colors hover:text-white md:self-center"
              aria-label="Yukarı dön"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/[0.06] pt-6 font-mono text-[11px] text-zinc-600 sm:flex-row">
            <span>© 2026 {profile.name} · React + Tailwind ile hazırlandı</span>
            <span>{profile.availability}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
