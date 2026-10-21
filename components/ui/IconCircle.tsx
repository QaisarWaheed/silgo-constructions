export default function IconCircle({
  icon,
  size = 76,
}: {
  icon: string;
  size?: number;
}) {
  return (
    <div
      style={{ width: size, height: size, fontSize: size * 0.34 }}
      className="flex items-center justify-center rounded-full border-2 border-gold transition-all duration-300 hover:scale-110 hover:bg-gold hover:text-on-gold"
    >
      {icon}
    </div>
  );
}
