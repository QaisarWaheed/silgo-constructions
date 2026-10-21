// Stand-in for photography/video until real assets are supplied.
export default function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden bg-gradient-to-br from-background-alt to-background text-center text-sm text-muted-dim transition-all duration-300 hover:brightness-110 ${className}`}
    >
      {label}
    </div>
  );
}
