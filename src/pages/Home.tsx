import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";
import OurMission from "../components/OurMissionSection";
import OurCommitment from "../components/OurCommitment";
import OurService from "../components/OurService";
import Footer from "../components/Footer";
import GetStartedSection from "@/components/GetStartedSection";
import Loading from "./Loading";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading key="loader" />
        ) : (
          <motion.main
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="bg-galaxy-mobile bg-size-[100%_100%] lg:bg-galaxy bg-bottom bg-no-repeat min-h-screen">
              <Navbar />
              <Hero />
            </div>

            <div id="mission">
              <OurMission />
            </div>

            <div className="min-h-screen w-full bg-[linear-gradient(89.76deg,#000C1D_0.21%,#092042_22.71%,#092042_73.46%,#000C1D_99.8%)]">
              <OurCommitment />
              <div id="services">
                <OurService />
              </div>
              <GetStartedSection />
              <Footer />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Home;
