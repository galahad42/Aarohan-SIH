import { useState } from "react";
import Loginbg from "../assests/Loginbg.svg";
import Loginboy1 from "../assests/boylogin1.svg";
import Loginboy2 from "../assests/boylogin2.svg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [age, setAge] = useState(0);
  const userTemp = "a";
  const passTemp = "1";
  const ageTemp = 10;
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${Loginbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex" /* Use flexbox */,
        justifyContent: "center" /* Center horizontally */,
        alignItems: "center",
        position: "relative",
      }}
    >
      <img
        src={Loginboy1}
        style={{
          position: "absolute",
          height: "400px",
          width: "400px",
          zIndex: 2,
          left: 250,
        }}
      />
      <img
        src={Loginboy2}
        style={{
          position: "absolute",
          height: "400px",
          width: "400px",
          zIndex: 2,
          right: 250,
        }}
      />
      <div
        style={{
          borderRadius: 40,
          height: "635px",
          width: "503px",
          border: "2px solid black",
          background: "#B7C7FF",
          position: "absolute",
        }}
      >
        <input
          placeholder="USERNAME"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="AGE"
          onChange={(e) => {
            setAge(e.target.value);
            console.log(age);
          }}
        />
        <Button
          onClick={() => {
            if (user == userTemp && pass == passTemp && age == ageTemp) {
              navigate("/");
            } else alert("Incorrect credentials!");
          }}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default Signin;
