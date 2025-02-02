export default function Error({ title, errorMessage }) {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{errorMessage}</p>
    </div>
  );
}
