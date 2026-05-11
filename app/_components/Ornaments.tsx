export function OrnLines({
  className = "",
  count = 5,
  red = false,
}: {
  className?: string;
  count?: number;
  red?: boolean;
}) {
  return (
    <div className={`orn orn-lines ${red ? "is-red" : ""} ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} />
      ))}
    </div>
  );
}

export function OrnBlock({
  className = "",
  color = "blue",
  skew = 1,
}: {
  className?: string;
  color?: "blue" | "red";
  skew?: 1 | 2;
}) {
  return <div className={`orn orn-block-${color} orn-skew-${skew} ${className}`} />;
}
