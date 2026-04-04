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
            <div className="relative lg:bg-size[100%_100%] h-screen bg-galaxy-mobile lg:bg-galaxy bg-cover bg-center lg:bg-position-[center_top_40%] lg:bg-fit bg-no-repeat">
              {/* <div className="absolute inset-0 bg-linear-to-b from-transparent from-70% to-black pointer-events-none"></div> */}
              <div className="absolute inset-0 bg-linear-to-b  from-[#03142B]/5% from-72% to-[#03142B] pointer-events-none"></div>

              <div className="relative z-10">
                <Navbar />
                <Hero />
              </div>
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
