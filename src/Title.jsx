export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Limit! Go <b>Pro</b> for &gt;5
        </span>
      ) : (
        "Cool Count"
      )}
    </h1>
  );
}
