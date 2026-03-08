import { useForm } from "react-hook-form";
import { motion, type Variants } from "framer-motion";

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
};

const FreelancerSide = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
    reset();
    window.open("https://forms.gle/aq97oYs1UFDataaM7", "_blank");
  };

  const namePattern = {
    value: /^[A-Za-z\s]+$/i,
    message: "Only letters are allowed",
  };

  const sideVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 100, // Slides in from the RIGHT
      filter: "blur(15px)",
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
        staggerChildren: 0.1, // Animates form groups one by one
      },
    },
  };

  const fieldVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={sideVariants}
      className="flex flex-col h-full lg:items-center items-end w-full px-4"
    >
      <h2 className="text-[20px] w-full font-black lg:font-bold uppercase text-left lg:text-center mb-2 lg:text-[28px] lg:mb-6 lg:normal-case">
        Freelancer
      </h2>

      <div className="lg:w-full w-70 max-w-md lg:min-h-120 bg-[#FCFBFB] p-4 lg:p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col justify-between">
        <div className="flex flex-col h-full">
          <p className="text-left font-bold text-black text-[15px] lg:text-[18px] mb-1 lg:mb-6">
            GLOBAL ACCESS GROUP
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="lg:space-y-4 grow">
            <motion.div
              variants={fieldVariants}
              className="flex flex-col group"
            >
              <label
                htmlFor="firstName"
                className="font-bold text-[16px] text-black/50 lg:mb-1 group-focus-within:text-black transition-colors"
              >
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                  pattern: namePattern,
                })}
                type="text"
                id="firstName"
                className={`border ${errors.firstName ? "border-red-500" : "border-black/10"} bg-[#D9D9D9]/20 rounded-full w-full p-1 lg:p-3 text-base outline-none focus:border-[#CF9A51] focus:bg-white transition-all`}
              />
              {errors.firstName && (
                <span className="text-red-500 text-xs mt-1 ml-3">
                  {errors.firstName.message}
                </span>
              )}
            </motion.div>

            <motion.div
              variants={fieldVariants}
              className="flex flex-col group"
            >
              <label
                htmlFor="lastName"
                className="font-bold text-[16px] text-black/50 mb-1 group-focus-within:text-black transition-colors"
              >
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                {...register("lastName", {
                  required: "Last name is required",
                  pattern: namePattern,
                })}
                type="text"
                id="lastName"
                className={`border ${errors.lastName ? "border-red-500" : "border-black/10"} bg-[#D9D9D9]/20 rounded-full w-full p-1 lg:p-3 text-base outline-none focus:border-[#CF9A51] focus:bg-white transition-all`}
              />
              {errors.lastName && (
                <span className="text-red-500 text-xs mt-1 ml-3">
                  {errors.lastName.message}
                </span>
              )}
            </motion.div>

            <motion.div
              variants={fieldVariants}
              className="flex flex-col group"
            >
              <label
                htmlFor="email"
                className="font-bold text-[16px] text-black/50 mb-1 group-focus-within:text-black transition-colors"
              >
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                id="email"
                className={`border ${errors.email ? "border-red-500" : "border-black/10"} bg-[#D9D9D9]/20 rounded-full w-full p-1 lg:p-3 text-base outline-none focus:border-[#CF9A51] focus:bg-white transition-all`}
              />
            </motion.div>

            <motion.div
              variants={fieldVariants}
              className="flex flex-col items-center pt-4"
            >
              <button
                type="submit"
                className="py-3 px-8 bg-gold-submit text-white text-[16px] lg:text-[22px] font-bold rounded-full shadow-md hover:brightness-110 transition-all active:scale-95 cursor-pointer"
              >
                Submit
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default FreelancerSide;
