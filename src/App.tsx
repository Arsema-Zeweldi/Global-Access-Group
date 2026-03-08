import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="font-nexa overflow-hidden">
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
