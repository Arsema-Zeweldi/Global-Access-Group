import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import OurMission from "./components/OurMissionSection";

function App() {
  return (
    <div className="font-nexa">
      <div className="bg-galaxy bg-cover bg-bottom bg-no-repeat min-h-screen">
        <Navbar />

        <Hero />
      </div>
      <OurMission />
    </div>
  );
}

export default App;
