import "./Button.css";
export default function Button({ onClick, className, btnName }) {
  return (
    <>
      <button onClick={onClick} className={className}>
        {btnName}
      </button>
    </>
  );
}
