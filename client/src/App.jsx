import HomeScreen from "./components/HomeScreen";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Learn from "./components/Learn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<HomeScreen />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/learn"} element={<Learn />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
