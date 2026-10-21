export default function InfoRow({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-3.5 rounded-md border border-gold/15 bg-card px-[18px] py-3.5 transition-all duration-300 hover:translate-x-1 hover:border-gold/50">
      <span className="text-xl">{icon}</span>
      <span className="text-[15px] font-semibold text-foreground">{label}</span>
    </div>
  );
}
