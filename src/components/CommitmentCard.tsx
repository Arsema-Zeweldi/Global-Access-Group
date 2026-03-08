import { motion, type Variants } from "framer-motion";

interface card {
  image: string;
  title: string;
  text: string;
  align?: "left" | "right";
  index: number;
}

const CommitmentCard = ({ image, title, text, align }: card) => {
  const isRight = align === "right";

  const alignmentClass = isRight
    ? "lg:self-end self-end"
    : "lg:self-start self-start";

  const roundedClass = isRight
    ? "rounded-l-[45px] lg:rounded-4xl"
    : "rounded-r-[45px] lg:rounded-4xl";

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      x: isRight ? 60 : -60,
      y: 40,
      filter: "blur(12px)",
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
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
      className={`${alignmentClass} w-[92%] lg:w-full lg:max-w-175`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
    >
      <div
        className={` flex flex-col lg:flex-row items-center bg-[#D9D9D9] w-full min-h-35 lg:h-50 ${roundedClass} px-2 py-6 lg:py-4 lg:px-2 font-nexa gap-3 lg:gap-4 shadow-lg transition-transform duration-500 hover:scale-[1.02]`}
      >
        <div className="flex items-center text-center w-[80%] lg:w-auto ">
          <div className="p-1 lg:p-px rounded-full bg-linear-to-b from-[#DBCC95] to-[#92723B] shrink-0">
            <div className="bg-white rounded-full flex items-center justify-center w-10 h-10 lg:w-auto lg:h-20">
              <img
                src={image}
                alt="Icon"
                className="h-10 lg:h-20 lg:w-auto w-15 "
              />
            </div>
          </div>

          <div className="lg:hidden flex-1">
            <h3 className="font-black text-[22px] leading-tight text-gray-900">
              {title}
            </h3>
          </div>
        </div>

        <div className="text-left lg:text-center lg:flex-1 antialiased w-full">
          <h3 className="hidden lg:block font-black text-[30px] py-2 text-gray-900">
            {title}
          </h3>
          <p className="text-center font-bold text-[20px] lg:text-[25px] leading-5 lg:leading-tight text-gray-800">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CommitmentCard;
