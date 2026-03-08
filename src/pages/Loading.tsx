import { motion } from "framer-motion";

const Loading = () => (
  <motion.div
    key="loading-screen"
    initial={{ y: 0 }}
    animate={{ y: 0 }}
    exit={{ y: "-100%" }}
    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    className="fixed inset-0 z-999 bg-about-hero-faded flex flex-col items-center justify-center text-white font-bold px-4"
  >
    <h1 className="text-4xl lg:text-5xl mb-8 text-center tracking-widest uppercase">
      Welcome to Global Access Solutions
    </h1>
    <div className="w-full max-w-sm bg-gray-800 h-1.5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="bg-[#D9A672] h-full shadow-[0_0_15px_#D9A672]"
      />
    </div>
  </motion.div>
);

export default Loading;
