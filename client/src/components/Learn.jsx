import learnBg from "../assests/Learn.svg";
import Writing from "./Writing";
import RIGHTS from "../Rights.json";

const Learn = () => {
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
      }}
    >
      {RIGHTS.map((e) => (
        <Writing key={e.id} head={e.Title} text={e.Description} />
      ))}
      <Writing
        head="Right against discrimination"
        text="Article 15 says no one can treat kids unfairly because of who they are or where they come from.
        All kids have the same rights, no matter where they live or how rich their family is.
        It helps all kids go to school, no matter who they are.
        It makes sure boys and girls are treated the same.
        Kids should have time to play and learn, not work."
      />
    </div>
  );
};

export default Learn;
