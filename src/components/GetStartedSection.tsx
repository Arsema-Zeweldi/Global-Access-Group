import EmployerSide from "./EmployerSide";
import FreelancerSide from "./FreelancerSide";
import { motion, type Variants } from "framer-motion";

const GetStartedSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, filter: "blur(15px)", scale: 0.98 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
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
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.6 },
          },
        }}
        className="text-center font-black text-[32px] lg:text-[40px] mb-2 lg:mb-6 uppercase tracking-tighter"
      >
        Let's Get Started
      </motion.h1>

      <motion.div
        variants={{ visible: { transition: { staggerChildren: 0 } } }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-4 items-stretch"
      >
        <EmployerSide />

        <motion.div
          variants={{
            hidden: { scaleY: 0 },
            visible: { scaleY: 1, transition: { delay: 0.5, duration: 0.8 } },
          }}
          className="hidden lg:block w-1 bg-[#ADADAD] self-stretch mt-15"
        />

        <FreelancerSide />
      </motion.div>
    </motion.div>
  );
};

export default GetStartedSection;
