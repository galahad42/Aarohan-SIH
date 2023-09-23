const Features = (props) => {
  const { image, text, color, reportTop, innerTop } = props;
  const color1 = "white";
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        width: 230,
        height: 355,
        borderRadius: 20,
        position: "relative",
        border: "2px solid black",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0%",
          transform: "translate(45%,-50%)",
          textAlign: "center",
        }}
      >
        <img src={reportTop} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "0%",
          transform: "translate(130%,-50%)",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <img src={innerTop} />
      </div>
      <div
        style={{
          backgroundColor: `${color1}`,
          borderRadius: 20,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          borderBottom: "2px solid black",
        }}
      >
        <img src={image} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "75%",
          transform: "translate(20%,-50%)",
          textAlign: "center",
        }}
      >
        <button
          style={{
            height: 67,
            width: 166,
            borderRadius: 20,
            background: "white",
          }}
        >
          <span
            style={{
              fontSize: 25,
            }}
          >
            {text}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Features;
