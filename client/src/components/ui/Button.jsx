function Button({
  text,
  onClick,
  disabled = false,
  type = "button",
}) {
  return (
    <button
      className="ui-button"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;