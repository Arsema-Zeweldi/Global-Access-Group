import { motion, type Variants } from "framer-motion";

const FreelancerSide = () => {
  const onSubmit = () => {
    window.open("https://forms.gle/aq97oYs1UFDataaM7", "_blank");
  };

  const sideVariants: Variants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        // This ensures children (the card) start after the heading
        staggerChildren: 0.4,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
      },
    },
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 10, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={sideVariants}
      className="flex flex-col h-full lg:items-center items-end w-full px-4"
    >
      <motion.h2
        variants={headingVariants}
        className="text-[20px] w-full font-black lg:font-bold uppercase text-left lg:text-center mb-2 lg:text-[28px] lg:mb-6 lg:normal-case"
      >
        Freelancer
      </motion.h2>

      <motion.div
        variants={cardVariants}
        className="lg:w-full w-70 max-w-md lg:min-h-120 bg-[#FCFBFB] p-4 lg:p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col justify-between"
      >
        <div className="flex flex-col h-full">
          <p className="text-left font-bold text-black text-[15px] lg:text-[18px] mb-1 lg:mb-6">
            GLOBAL ACCESS GROUP
          </p>

          <form onClick={onSubmit} className="lg:space-y-4 grow">
            <div className="flex flex-col group">
              <label
                htmlFor="firstName"
                className="font-bold text-[16px] text-black/50 lg:mb-1 group-focus-within:text-black transition-colors"
              >
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                className="border border-[#D9D9D9]/80 bg-[#D9D9D9]/20 rounded-full w-full p-1 lg:p-3 text-base outline-none focus:border-[#CF9A51] focus:bg-white transition-all"
              />
            </div>

            <div className="flex flex-col group">
              <label
                htmlFor="lastName"
                className="font-bold text-[16px]  text-black/50 mb-1 group-focus-within:text-black transition-colors"
              >
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                className={`border border-[#D9D9D9]/80 bg-[#D9D9D9]/20 rounded-full w-full p-1 lg:p-3 text-base outline-none focus:border-[#CF9A51] focus:bg-white transition-all`}
              />
            </div>

            <div className="flex flex-col group">
              <label
                htmlFor="email"
                className="font-bold text-[16px] text-black/50 mb-1 group-focus-within:text-black transition-colors"
              >
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="border border-[#D9D9D9]/80 bg-[#D9D9D9]/20 rounded-full w-full p-1 lg:p-3 text-base outline-none focus:border-[#CF9A51] focus:bg-white transition-all"
              />
            </div>

            <div className="flex flex-col items-center pt-4">
              <button
                type="submit"
                className="py-3 px-8 bg-gold-submit text-white text-[16px] lg:text-[22px] font-bold rounded-full shadow-md hover:brightness-110 transition-all active:scale-95 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FreelancerSide;
