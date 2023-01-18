export const InputButton = (props) => {
  return (
    <>
      <input
        name={props.name}
        type={props.type}
        id="inputtag"
        onChange={props.onChange}
        className={props.class}
        placeholder={props.placeholder}
        style={props.style}
        required
      />
    </>
  );
};
