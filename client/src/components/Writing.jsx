import paper from "../assests/paper2.svg";
import learnBg from "../assests/Learnbg.svg";
const Writing = (props) => {
  const { head, text } = props;
  return (
    <div
      style={{
        backgroundImage: `url(${learnBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
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
            top: "-23%",
          }}
        />

        <h1
          style={{
            position: "absolute",
            top: "0%",
            left: "27%",
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
    </div>
  );
};

export default Writing;