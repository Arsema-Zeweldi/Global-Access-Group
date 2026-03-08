import { motion, type Variants } from "framer-motion";

interface card {
  image: string;
  title: string;
  description: string;
}

const ServiceCard = ({ image, title, description }: card) => {
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      filter: "blur(15px)",
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex cursor-pointer flex-col items-center px-0 lg:px-5 text-center perspective-[1000px] w-full lg:pt-15"
    >
      <div
        className="
          w-40 h-55 
          rounded-none 
          flex flex-col items-center justify-start 
          p-3
          transition-all duration-500 ease-in-out
          
          hover:w-full hover:h-44 
          hover:flex-row hover:items-center hover:justify-start
          hover:border-x-0 hover:lg:border-4
          
          lg:w-43 lg:h-95
          lg:flex-col lg:items-center 
          lg:rounded-[300px] 
          lg:p-0
          
          lg:group-hover:w-55
          lg:group-hover:h-120
          lg:group-hover:flex-col
          
          border-4 border-transparent
          overflow-hidden
          group-hover:border-[#D6AF4E]
          group-hover:lg:bg-[linear-gradient(180deg,#1A1F32_63.46%,#030303_100%)]
          group-hover:bg-[#D9D9D9]/30
          lg:group-hover:-translate-y-20
        "
        style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
      >
        <div
          className="
          relative z-20 shrink-0 transition-all ease-in-out
          w-28 h-25  
          lg:w-full lg:h-auto lg:aspect-square 
          border-4 border-[#D6AF4E] group-hover:lg:border-0 rounded-full
        "
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover rounded-full"
          />
        </div>

        <div
          className="
          relative z-20 flex flex-col justify-center transition-all duration-500
          mt-2 ml-0
          group-hover:mt-0 
          text-center lg:mt-3 lg:ml-0 lg:text-center 
        "
        >
          <p className="text-[18px] lg:text-[22px] font-bold text-white group-hover:text-[22px] lg:group-hover:text-[22px] transition-all whitespace-normal group-hover:font-black group-hover:lg:font-bold">
            {title}
          </p>

          <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
            <img
              src="src/assets/Graphics/yellow-glow-light.png"
              alt=""
              className="hidden lg:block mx-auto opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:mt-2"
            />
            <p className="mt-1 lg:mt-2 text-[20px] lg:text-[22px] font-bold leading-tight text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
