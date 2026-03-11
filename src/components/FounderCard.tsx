import { motion } from "framer-motion";

interface card {
  image: string;
  name: string;
  text: string;
  align?: "left" | "right";
  index: number;
}

const FounderCard = ({ image, name, text, align, index }: card) => {
  const isRight = align === "right";
  return (
    <motion.div
      className={`w-full flex ${isRight ? "justify-end" : "justify-start"}`}
      initial={{ opacity: 0, x: isRight ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <div
        className={`flex flex-col sm:flex-row items-center gap-4 lg:gap-6 bg-[#0A2143] text-white p-6 lg:p-8 w-[90%] sm:w-auto lg:w-[780px] border-y-4 border-[#FFAE36] ${
          isRight
            ? "border-l-4 rounded-l-3xl self-end"
            : "border-r-4 rounded-r-3xl self-start"
        }
    `}
      >
        <div className="p-px rounded-full bg-[#FFAE36] shrink-0">
          <div className="bg-[#FFAE36] rounded-full p-1 flex items-center justify-center">
            <img
              src={image}
              alt={name}
              className="h-30 w-auto object-contain"
            />
          </div>
        </div>
        <div className=" text-white flex-1 text-xl antialiased">
          <p className="font-extrabold py-2 text-center">{name}</p>
          <p className="font-bold leading-normal">{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FounderCard;
