import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const EmployerSide = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const daysInMonth = (year: number, month: number): number =>
    new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = (year: number, month: number): number =>
    new Date(year, month, 1).getDay();

  const year: number = currentDate.getFullYear();
  const month: number = currentDate.getMonth();
  const today: Date = new Date();

  const handlePrev = (): void => setCurrentDate(new Date(year, month - 1, 1));
  const handleNext = (): void => setCurrentDate(new Date(year, month + 1, 1));

  const monthName: string = currentDate.toLocaleString("default", {
    month: "long",
  });

  const days: number[] = Array.from(
    { length: daysInMonth(year, month) },
    (_, i) => i + 1,
  );

  const blanks: number[] = Array.from(
    { length: firstDayOfMonth(year, month) },
    (_, i) => i,
  );

  const isToday = (day: number): boolean =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  const sideVariants: Variants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
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
    },
  };

  return (
    <motion.div
      variants={sideVariants}
      className="flex flex-col lg:items-center items-end h-full w-full px-4"
    >
      <motion.h2
        variants={headingVariants}
        className="text-[20px] w-full font-black lg:font-bold uppercase text-left lg:text-center mb-2 lg:text-[28px] lg:mb-6 lg:normal-case"
      >
        Employer
      </motion.h2>

      <motion.div
        variants={cardVariants}
        className="bg-[#FCFBFB] p-4 lg:p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col  justify-between lg:w-full w-70 h-auto max-w-md lg:min-h-120"
      >
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-black font-bold text-xl tracking-tight capitalize">
              {monthName} {year}
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 hover:bg-black/5 rounded-full border border-gray-100 transition-all active:scale-90"
              >
                <IoChevronBack size={20} className="text-black/50" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 hover:bg-black/5 rounded-full border border-gray-100 transition-all active:scale-90"
              >
                <IoChevronForward size={20} className="text-black/50" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-x-2 border-b border-gray-50 lg:pb-2 lg:mb-2">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, index) => (
              <div
                key={index}
                className="text-center text-[18px] font-bold text-black/50 uppercase"
              >
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 lg:gap-y-1 gap-x-2">
            {blanks.map((b) => (
              <div key={`blank-${b}`} />
            ))}
            {days.map((day) => (
              <div key={day} className="flex justify-center items-center">
                <button
                  className={`w-10 h-10 text-[18px] font-semibold rounded-full transition-all ${
                    isToday(day)
                      ? "bg-[#CF9A51] text-white shadow-md scale-105"
                      : "text-black/50 hover:bg-gray-100"
                  }`}
                >
                  {day}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center lg:pt-2">
          <button className="py-3 px-8 bg-[#092042] text-white text-[18px] lg:text-[22px] font-bold rounded-full shadow-md hover:bg-[#071935] transition-all active:scale-95 cursor-pointer">
            Book A Chat
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EmployerSide;
