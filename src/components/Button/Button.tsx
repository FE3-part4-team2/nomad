export default function Button({ title, onClick }) {
  return (
    <button onClick={onClick} type="submit">
      {title}
    </button>
  );
}
