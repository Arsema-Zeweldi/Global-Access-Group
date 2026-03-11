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
      y: 0,
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
      className={`${alignmentClass} w-[90%] lg:w-full lg:max-w-175`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
    >
      <div
        className={` flex flex-col lg:flex-row bg-[#D9D9D9] w-full min-h-30 lg:min-h-45 ${roundedClass} px-2 py-2 lg:py-8 lg:px-5 font-nexa shadow-lg transition-transform duration-500 hover:scale-[1.02] pb-7`}
      >
        <div className="flex items-center text-center w-[80%] lg:w-auto mx-8">
          <div className="p-1 lg:p-0.75 rounded-full bg-linear-to-b from-[#DBCC95] to-[#92723B] shrink-0">
            <div className="bg-white rounded-full flex items-center justify-center w-10 h-10 lg:w-auto lg:h-20">
              <img
                src={image}
                alt="Icon"
                className="h-10 lg:h-20 lg:w-auto w-15 "
              />
            </div>
          </div>

          <div className="lg:hidden flex-1">
            <h3 className="font-black text-[19px] leading-5 text-gray-900">
              {title}
            </h3>
          </div>
        </div>

        <div className=" text-left lg:text-center lg:flex-1 antialiased w-full ">
          <h3 className="hidden lg:block font-black text-[25px] text-gray-900">
            {title}
          </h3>
          <p className="text-center font-bold mt-3 lg:mt-5 text-[17px] lg:text-[25px] leading-4.5 lg:leading-7.5 text-gray-800">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CommitmentCard;
