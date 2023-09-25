import HomeScreen from "./components/HomeScreen";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<HomeScreen />} />
          <Route path={"/profile"} element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
