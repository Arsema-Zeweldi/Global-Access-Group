import MissionCard from "./missionCard";
const OurMission = () => {
  const mission = [
    {
      id: "1",
      icon: "src/assets/Graphics/Outsourcing.png",
      name: "Recruitment",
      detail: "Rigorous vetting for language, skill, and fit.",
    },
    {
      id: "2",
      icon: "src/assets/Graphics/Interview.png",
      name: "Taleny Matching",
      detail: "Industry-aligned candidates ready from Day 1.",
    },
    {
      id: "3",
      icon: "src/assets/Graphics/Placment.png",
      name: "Placement",
      detail: "Training support or seamlesss system integration.",
    },
    {
      id: "4",
      icon: "src/assets/Graphics/Optimization.png",
      name: "Performance Optimization",
      detail: "Real-time tracking, reviews, and KPI improvement.",
    },
  ];
  return (
    <div className="bg-white flex flex-col font-regular justify-between items-center mt-10">
      <div className="flex items-center w-full gap-0 max-w-lg mx-auto mb-10">
        {/* Left Line */}
        <div className="grow h-0.5 bg-[#D9A672] shadow-gold-reversed" />

        {/* Center Content */}
        <div className="border-[#D9A672] shadow-gold py-2 px-8 border-2 rounded-xl  shrink-0">
          <h1 className=" font-nexa tracking-widest">OUR MISSION</h1>
        </div>

        {/* Right Line */}
        <div className="grow h-0.5 bg-[#D9A672] shadow-gold-reversed" />
      </div>
      <p className="font-light text-2xl max-w-xl text-center mb-12">
        Providing Business With Access To The World Best Talent Without Extra
        Overhead
      </p>
      <div className="flex mt-8 gap-10 px-10 mb-15 ">
        {mission.map((item) => (
          <MissionCard
            key={item.id}
            icon={item.icon}
            name={item.name}
            detail={item.detail}
          />
        ))}
      </div>
    </div>
  );
};

export default OurMission;
