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
  const alignmentClass = align === "right" ? "self-end" : "self-start";
  return (
    <motion.div
      className={`${alignmentClass} max-w-full`}
      initial={{ opacity: 0, x: isRight ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.4,
        ease: "easeOut",
      }}
    >
      <div
        className={`flex items-center bg-[#0A2143] w-165 h-40 px-5 font-nexa border-0 border-[#FFAE36] border-t-4 border-b-4 ${isRight ? "border-l-4 rounded-l-4xl" : "border-r-4 rounded-r-4xl"}
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
        <div className="text-center text-white flex-1 text-2xl antialiased">
          <p className="font-extrabold py-2">{name}</p>
          <p className="font-bold leading-normal">{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FounderCard;
