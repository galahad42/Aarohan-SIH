import Homescreen from "../assests/HomeScreen.svg";
import report from "../assests/report (1).svg";
import report2 from "../assests/report (2).svg";
import report3 from "../assests/report (3).svg";
import report4 from "../assests/report (4).svg";
import Features from "./Features";
import reportTop4 from "../assests/Group 8781.svg";
import reportTop1 from "../assests/Group 8783 (1).svg";
import reportTop2 from "../assests/Group 8783.svg";
import reportTop3 from "../assests/Group 8783 (2).svg";
import Th from "../assests/Th.svg";
import Th1 from "../assests/Xbox Controller (1).svg";
import Th2 from "../assests/Document.svg";
import Th3 from "../assests/Chat.svg";

const HomeScreen = () => {
  const cards = [
    {
      text: "PLAY",
      color: "#F0C14B",
      img: report3,
      reportTop: reportTop2,
      innerTop: Th,
      navigate: "/play",
    },
    {
      text: "LEARN",
      color: "#B5D56A",
      img: report2,
      reportTop: reportTop1,
      innerTop: Th1,
      navigate: "/learn",
    },
    {
      text: "CHAT",
      color: "#84BED6",
      img: report4,
      reportTop: reportTop3,
      innerTop: Th2,
      navigate: "/chat",
    },
    {
      text: "REPORT",
      color: "#EA7065",
      img: report,
      reportTop: reportTop4,
      innerTop: Th3,
      navigate: "/report",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${Homescreen})`,
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
          display: "flex",
          justifyContent: "space-evenly",
          padding: 20,
          width: "100%",
        }}
      >
        {cards.map((card) => (
          <Features
            key={card.text}
            image={card.img}
            text={card.text}
            color={card.color}
            reportTop={card.reportTop}
            innerTop={card.innerTop}
            navigate={card.navigate}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
