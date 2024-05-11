import "./Snowflakes.css";

export default function Snowflakes() {
  const snowflakes = Array.from({ length: 50 }).map((_, i) => (
    <div
      key={i}
      className="snowflake"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
      }}
    />
  ));

  return <div className="snowflakes">{snowflakes}</div>;
}
