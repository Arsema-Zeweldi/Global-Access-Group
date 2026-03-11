import { motion, type Variants } from "framer-motion";
import ServiceCard from "./ServiceCard";

const OurService = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const services = [
    {
      image: "src/assets/Images/services/server1.png",
      title: "Sales Development Representative",
      description: "Qualifies inbound leads",
    },
    {
      image: "src/assets/Images/services/BDR.png",
      title: "Business Development Representative",
      description: "Hunts new revenue",
    },
    {
      image: "src/assets/Images/services/Dispatcher.png",
      title: "Dispatcher",
      description: "Synchronizes filed operations",
    },
    {
      image: "src/assets/Images/services/virtual-assistant.png",
      title: "Virtual Assistant",
      description: "Reclaims your billable hours",
    },
    {
      image: "src/assets/Images/services/Customer-Services.png",
      title: "Customer Services",
      description: "Turns inquiries into customers",
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="p-6 lg:p-15">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center w-full gap-0 max-w-3xl mx-auto lg:mb-5 mb-0"
        >
          <div className="grow h-0.5 bg-[#D9A672] shadow-gold-reversed" />

          <div className="border-[#D9A672] shadow-gold py-2 px-4 lg:px-8 border-2 rounded-xl shrink-0">
            <h1 className="font-bold text-lg lg:text-3xl text-white tracking-widest text-center">
              OUR SERVICE
            </h1>
          </div>

          <div className="grow h-0.5 bg-[#D9A672] shadow-gold-reversed" />
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col lg:flex-row lg:gap-2 gap-5 justify-center items-start lg:min-h-screen lg:px-10 pb-20"
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default OurService;
