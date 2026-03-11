import { motion, type Variants } from "framer-motion";

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
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
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <motion.div
      className="text-white mt-[25vh] lg:mt-[16vh]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h1
        variants={itemVariants}
        className="font-bold text-[28px] lg:text-[60px] text-center"
      >
        WHERE CAPABILITY MEETS <br /> CONSISTENCY
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="font-light text-center text-[18px] lg:text-[30px]"
      >
        OnBoarding New Talents Within Days
      </motion.p>
      <motion.div
        variants={itemVariants}
        className="flex justify-center gap-4 mt-10"
      >
        <button className="border border-white py-3 px-5 rounded-full lg:rounded-2xl bg-gold-grad font-black hover:bg-gold-grad-hover cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 hover:brightness-110 active:brightness-110 shadow-lg text-[18px] lg:text-2xl">
          FIND TALENT
        </button>

        <button className="border border-white py-3 px-5 rounded-full lg:rounded-xl cursor-pointer font-black hover:bg-white hover:text-black active:bg-white active:text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] text-[18px] lg:text-2xl">
          FIND WORK
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
