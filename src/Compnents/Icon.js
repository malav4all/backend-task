/* eslint-disable */
export const Icon = (props) => {
  return (
    <>
      <a>
        {" "}
        <i className={props.class} style={props.style}>
          {props.innertext}
        </i>
      </a>
    </>
  );
};
