import { motion, type Variants } from "framer-motion";

interface mission {
  icon: string;
  name: string;
  detail: string;
}

const MissionCard = (props: mission) => {
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="flex flex-col items-center min-w-64 rounded-2xl py-2 lg:px-15 px-10 gap-3 backdrop-blur-md bg-white/5 border-2 border-transparent shadow-card-dark cursor-pointer transition-all duration-500 ease-in-out hover:bg-[#0B1C36] hover:text-white lg:hover:-translate-y-1 hover:scale-110 hover:z-10 hover:shadow-[10px_10px_20px_rgba(0,0,0,0.6),-1px_-1px_15px_rgba(0,0,0,0.1)] hover:border-[#CC8800]"
    >
      <img src={props.icon} alt={props.name} className="lg:h-20 w-auto h-15" />
      <h1 className="font-bold text-center text-3xl lg:text-2xl tracking-wide">
        {props.name}
      </h1>
      <p className="font-light text-center leading-relaxed text-2xl">
        {props.detail}
      </p>
    </motion.div>
  );
};

export default MissionCard;
