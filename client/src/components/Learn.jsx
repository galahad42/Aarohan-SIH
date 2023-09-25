import learnBg from "../assests/Learn.svg";
import RIGHTS from "../Rights.json";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

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
    >
      <h1
        style={{
          fontSize: "2em",
          textDecoration: "underline",
        }}
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
                background: "#F0C14B",
              }}
            >
              <h2 style={{ marginLeft: "20px" }}>
                Article Number {right["Article Number"]}
              </h2>
              <ListItemButton component="a">
                <ListItemText
                  primary={right.Title}
                  onClick={() => navigate(`/learn/${right.Id}`)}
                  className="hover:bg-white  "
                />
              </ListItemButton>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Learn;
