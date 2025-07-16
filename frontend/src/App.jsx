import Navbar from "./components/Navbar";
import SlidingLoginSignup from "./Pages/Auth/SlidingLoginSignup";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Profile from "./Pages/Profile";

function App() {
  const isSlideSignupPage = location.pathname === "/slidesignup";

  return (
    <>
      {isSlideSignupPage && <Navbar />}
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/get-started" element={<SlidingLoginSignup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
