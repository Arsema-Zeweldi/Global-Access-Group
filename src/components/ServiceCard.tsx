import { motion, type Variants } from "framer-motion";

interface card {
  image: string;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ image, title, description, index }: card) => {
  const isEven = index % 2 === 0;

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
        className={`w-full h-44 flex items-center p-2 ${isEven ? "flex-row " : "flex-row-reverse "} transition-all duration-500 ease-in-out lg:flex-col lg:w-43 lg:h-95 lg:rounded-[300px] lg:bg-none lg:p-0 lg:group-hover:w-55 lg:group-hover:h-120 lg:group-hover:flex-col lg:group-hover:bg-[linear-gradient(180deg,#1A1F32_63.46%,#030303_100%)] lg:group-hover:-translate-y-15 border-4 lg:border-transparent lg:group-hover:border-[#D9A672]`}
      >
        <div className="relative z-20 shrink-0 transition-all ease-in-out w-28 h-auto p-0.75 rounded-full border-0 bg-service-border lg:w-full lg:h-auto lg:aspect-square lg:group-hover:bg-none">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover rounded-full "
          />
        </div>

        <div className="relative z-20 flex flex-col justify-center transition-all duration-500 ml-4 text-left lg:mt-3 lg:ml-0 lg:text-center">
          <p className="text-[22px] lg:text-[22px] font-black lg:text-white px-2 text-[#FFE4AE] lg:font-bold  lg:group-hover:font-black">
            {title}
          </p>

          <div className="max-h-40 opacity-100 transition-all overflow-hidden lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-40 lg:group-hover:opacity-100">
            <img
              src="./Graphics/yellow-glow-light.png"
              alt=""
              className="mt-1 px-5 hidden lg:block mx-auto mb-5"
            />
            <p className="mt-1 text-[19px] lg:text-[22px] font-bold leading-tight text-white/90  px-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
