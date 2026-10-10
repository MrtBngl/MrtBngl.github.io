export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* zemin */}
      <div className="absolute inset-0 bg-[#09090b]" />
      {/* çok hafif statik mesh — animasyonsuz */}
      <div className="absolute -top-[260px] left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.12),transparent)] blur-2xl" />
      <div className="absolute -top-[120px] right-[10%] h-[320px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(52,211,153,0.07),transparent)] blur-2xl" />
      <div className="absolute top-[55%] -left-[160px] h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.06),transparent)] blur-3xl" />
      {/* silik grid */}
      <div className="grid-bg absolute inset-0" />
      {/* üst ince çizgi */}
      <div className="absolute left-1/2 top-0 h-px w-[64%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </div>
  );
}
