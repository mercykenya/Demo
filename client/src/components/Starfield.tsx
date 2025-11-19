export default function Starfield({ count = 50, className = "" }: { count?: number; className?: string }) {
  return (
    <div className={`absolute inset-0 opacity-30 ${className}`}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}
