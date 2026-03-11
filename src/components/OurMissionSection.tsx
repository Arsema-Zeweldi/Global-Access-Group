import { motion, type Variants } from "framer-motion";
import MissionCard from "./missionCard";

const OurMission = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      filter: "blur(12px)",
      opacity: 0,
      scale: 0.9,
      y: 100,
    },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const mission = [
    {
      id: "1",
      icon: "src/assets/Graphics/Outsourcing.png",
      name: "Outsourcing",
      detail: "Skilled candidates who match your company's needs.",
    },
    {
      id: "2",
      icon: "src/assets/Graphics/Interview.png",
      name: "Talent Matching",
      detail: "Industry aligned candidates ready from Day 1.",
    },
    {
      id: "3",
      icon: "src/assets/Graphics/Placment.png",
      name: "Placement",
      detail: "Training support or seamlesss system integration.",
    },
    {
      id: "4",
      icon: "src/assets/Graphics/Optimization.png",
      name: "Performance Optimization",
      detail: "Real-time tracking, reviews, and KPI improvement.",
    },
  ];

  return (
    <motion.div
      id="mission"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="bg-[#F3EFEE]/50 flex flex-col gap-3 font-regular justify-between items-center pt-[4vh] min-h-screen"
    >
      <motion.div
        variants={itemVariants}
        className="flex items-center w-full max-w-xs lg:max-w-3xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="grow h-1.25 lg:h-0.5 bg-[#D9A672] shadow-gold-reversed"
        />
        <motion.div
          variants={itemVariants}
          className="border-[#D9A672] shadow-gold py-2 px-2 lg:px-8 border-2 rounded-3xl lg:rounded-xl shrink-0"
        >
          <motion.h1
            variants={itemVariants}
            className="font-bold text-xl lg:text-3xl tracking-widest uppercase"
          >
            OUR MISSION
          </motion.h1>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="grow h-1.25 lg:h-0.5 bg-[#D9A672] shadow-gold-reversed"
        />
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="px-2 font-bold text-xl lg:text-[32px] max-w-4xl text-center leading-tight mt-2 mb-5 lg:mb-[6vh]"
      >
        Providing Business With Access To The World Best Talent Without Extra
        Overhead
      </motion.p>

      <motion.div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-center px-10 lg:px-10 mb-10 w-full max-w-6xl">
        {mission.map((item) => (
          <MissionCard
            key={item.id}
            icon={item.icon}
            name={item.name}
            detail={item.detail}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default OurMission;
