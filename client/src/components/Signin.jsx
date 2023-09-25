import { useState } from "react";
import Loginbg from "../assests/Loginbg.svg";
import Loginboy1 from "../assests/boylogin1.svg";
import Loginboy2 from "../assests/boylogin2.svg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import profilelogo from "../assests/profilelogo.svg";

const Signin = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [age, setAge] = useState(0);
  const userTemp = "Aarohan";
  const passTemp = "12345";
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
      }}

    >
      <div
        style={{
          borderRadius: 40,
          height: "635px",
          width: "503px",
          border: "4px solid black",
          background: "#B7C7FF",
          position: "relative",
        }}
        className="flex flex-col justify-center items-center gap-4"
      >
        <img
          src={Loginboy1}
          style={{
            position: "absolute",
            height: "400px",
            width: "400px",
            zIndex: 2,
            right: "70%",
          }}
        />
        <img
          src={Loginboy2}
          style={{
            position: "absolute",
            height: "400px",
            width: "400px",
            zIndex: 2,
            left: "70%",
          }}
        />

        <img src={profilelogo} alt="" />
        <input className="p-4 rounded-full w-[80%]"
          placeholder="USERNAME"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <input className="p-4 rounded-full w-[80%]"
          type="password"
          placeholder="PASSWORD"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <input className="p-4 rounded-full w-[80%]"
          type="number"
          placeholder="AGE"
          onChange={(e) => {
            setAge(parseInt(e.target.value));
            console.log(age);
          }}
        />
        <Button
          onClick={() => {
            if (user === userTemp && pass === passTemp && age === ageTemp) {
              navigate("/");
            } else alert("Incorrect credentials!");
          }}

          className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"
        >
          SUBMIT
        </Button>
      </div>
    </div >
  );
};

export default Signin;
