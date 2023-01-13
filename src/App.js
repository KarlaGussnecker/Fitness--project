import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { SignUp } from "./pages/SignUp";
import { Questions } from "./pages/Questions";

function App() {
  const year = new Date().getFullYear();
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>{`Copyright © KarlaGussnecker ${year}`}</footer>
    </>
  );
}

export default App;
