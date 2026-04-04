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

  const onTalent = () => {
    window.open("https://calendar.app.google/fX4KJGUAozwXSmyP8", "_blank");
  };

  const onWork = () => {
    window.open("https://forms.gle/aq97oYs1UFDataaM7", "_blank");
  };

  return (
    <motion.div
      className="text-white mt-[20vh] lg:mt-[8vh]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h1
        variants={itemVariants}
        className="font-bold mb-1 text-[30px] lg:text-[55px] text-center lg:leading-[1.3] leading-normal"
      >
        WHERE CAPABILITY MEETS <br /> CONSISTENCY
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="font-light mb-4 lg:mb-5 text-center text-[20px] lg:text-[25px]"
      >
        OnBoarding New Talents Within Days
      </motion.p>
      <motion.div variants={itemVariants} className="flex justify-center gap-4">
        <button
          onClick={onTalent}
          className="border border-white py-2 px-4 rounded-full lg:rounded-2xl bg-gold-grad font-black hover:bg-gold-grad-hover cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 hover:brightness-110 active:brightness-110 shadow-lg text-[16px] lg:text-lg"
        >
          FIND TALENT
        </button>

        <button
          onClick={onWork}
          className="border border-white py-2 px-4 rounded-full lg:rounded-2xl cursor-pointer font-black hover:bg-white hover:text-black active:bg-white active:text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] text-[16px] lg:text-lg"
        >
          FIND WORK
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
