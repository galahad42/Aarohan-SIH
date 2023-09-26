import learnBg from "../assests/Learnbg.svg";
import RIGHTS from "../Rights.json";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import quizimg from "../assests/quizimg.svg";

const Learn = () => {
  const navigate = useNavigate();
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
      className="object-fill"
    >
      <h1
        style={{
          fontSize: "2em",
          textDecoration: "underline",
        }}

        className="mb-6 pt-4"
      >
        List of Rights
      </h1>
      <ul>
        {RIGHTS.map((right) => (
          <li
            key={right.Id}
            style={{
              fontSize: "1.72em",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: 20,
                marginRight: "90px",
                background: "#6a0dada2",
              }}
              className="text-bold text-white m-2 rounded-3xl"
            >
              <h2 style={{ marginLeft: "20px" }}>
                Article Number {right["Article Number"]}<span>&#160;</span> ->
              </h2>
              <ListItemButton component="a">
                <ListItemText
                  primary={right.Title}
                  onClick={() => navigate(`/learn/${right.Id}`)}
                  className="text-bold text-white"
                />
                <img src={quizimg} alt="" width={40} onClick={() => { navigate('/quiz') }} />

              </ListItemButton>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Learn;
