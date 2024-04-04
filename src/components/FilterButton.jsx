function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Mostra </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasques</span>
    </button>
  );
}

export default FilterButton;
