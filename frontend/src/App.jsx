import Navbar from "./components/Navbar";
import SlidingLoginSignup from "./Pages/Auth/SlidingLoginSignup";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";

function App() {
  const isSlideSignupPage = location.pathname === "/slidesignup";

  return (
    <>
      {isSlideSignupPage && <Navbar />}
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/get-started" element={<SlidingLoginSignup />} />
      </Routes>
    </>
  );
}

export default App;
