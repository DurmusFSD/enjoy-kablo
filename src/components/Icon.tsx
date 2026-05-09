interface IconProps {
  name: string;
  className?: string;
  filled?: boolean;
  size?: number;
  style?: React.CSSProperties;
}

export default function Icon({ name, className = "", filled = false, size, style }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${filled ? "filled" : ""} ${className}`}
      style={{ ...(size ? { fontSize: `${size}px` } : {}), ...style }}
    >
      {name}
    </span>
  );
}
