import paper from "../assests/paper2.svg";

const Writing = (props) => {
  const { head, text } = props;
  return (
    <div
      style={{
        position: "relative",
        height: "70vh",
        width: "70vw",
      }}
    >
      <img
        src={paper}
        style={{
          position: "absolute",
          height: "90vh",
          width: "90vw",
          top: "10px",
          bottom: 10,
        }}
      />

      <h1
        style={{
          position: "absolute",
          top: "25%",
          left: "29%",
          fontSize: "2em",
          maxWidth: "30vw",
          overflowWrap: "break-word",
        }}
      >
        {head}
        <p
          style={{
            fontWeight: "lighter",
            fontSize: "19px",
            maxWidth: "25vw",
            overflowWrap: "break-word",
            textDecoration: "none",
          }}
        >
          {text}
        </p>
      </h1>
    </div>
  );
};

export default Writing;
