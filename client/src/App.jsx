import HomeScreen from "./components/HomeScreen";
import NavBar from "./components/NavBar";
import Quiz from "./components/Quiz";
import Profile from "./components/Profile";
import Learn from "./components/Learn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Report from "./components/Report";
import Chatbot from "./components/Chatbot";
import Writing from "./components/Writing";
import RIGHTS from "./Rights.json";

const App = () => {
  const e = RIGHTS;
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<HomeScreen />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/learn"} element={<Learn />} />
          <Route path={"/quiz"} element={<Quiz />} />
          <Route
            path={"/learn/1"}
            element={
              <Writing
                key={e[0].id}
                head={e[0].Title}
                text={e[0].Description}
              />
            }
          />
          <Route
            path={"/learn/2"}
            element={
              <Writing
                key={e[1].id}
                head={e[1].Title}
                text={e[1].Description}
              />
            }
          />
          <Route
            path={"/learn/3"}
            element={
              <Writing
                key={e[2].id}
                head={e[2].Title}
                text={e[2].Description}
              />
            }
          />
          <Route
            path={"/learn/4"}
            element={
              <Writing
                key={e[3].id}
                head={e[3].Title}
                text={e[3].Description}
              />
            }
          />
          <Route
            path={"/learn/5"}
            element={
              <Writing
                key={e[4].id}
                head={e[4].Title}
                text={e[4].Description}
              />
            }
          />
          <Route
            path={"/learn/6"}
            element={
              <Writing
                key={e[5].id}
                head={e[5].Title}
                text={e[5].Description}
              />
            }
          />
          <Route
            path={"/learn/7"}
            element={
              <Writing
                key={e[6].id}
                head={e[6].Title}
                text={e[6].Description}
              />
            }
          />
          <Route
            path={"/learn/8"}
            element={
              <Writing
                key={e[7].id}
                head={e[7].Title}
                text={e[7].Description}
              />
            }
          />
          <Route
            path={"/learn/9"}
            element={
              <Writing
                key={e[8].id}
                head={e[8].Title}
                text={e[8].Description}
              />
            }
          />
          <Route path={"/report"} element={<Report />} />
          <Route path={"/chat"} element={<Chatbot />} />
          <Route path={"/signin"} element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
