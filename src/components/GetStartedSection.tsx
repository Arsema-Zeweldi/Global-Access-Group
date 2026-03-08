import EmployerSide from "./EmployerSide";
import FreelancerSide from "./FreelancerSide";
import { motion, type Variants } from "framer-motion";

const GetStartedSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="bg-[#F3EFEE] py-10 px-4 lg:px-10 min-h-screen rounded-[40px] lg:rounded-[50px] mb-10"
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: -20, filter: "blur(10px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        className="text-center font-black text-[32px] lg:text-[40px] mb-2 lg:mb-6 uppercase tracking-tighter"
      >
        Let's Get Started
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-4 items-stretch">
        <EmployerSide />

        <motion.div
          variants={lineVariants}
          className="hidden lg:block w-1 bg-[#ADADAD] self-stretch mt-15"
        />

        <FreelancerSide />
      </div>
    </motion.div>
  );
};

export default GetStartedSection;
