export default function NumberBadge({ n }: { n: number }) {
  return (
    <div className="absolute -top-3.5 left-5 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-[13px] font-bold text-on-gold">
      {n}
    </div>
  );
}
