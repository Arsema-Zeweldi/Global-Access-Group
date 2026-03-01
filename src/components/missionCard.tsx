interface mission {
  icon: string;
  name: string;
  detail: string;
}
const MissionCard = (props: mission) => {
  return (
    <div className=" flex flex-col items-center min-w-64 rounded-2xl py-15 px-8 gap-3 backdrop-blur-md bg-white/5 border-2 border-transparent shadow-card-dark cursor-pointer transition-all duration-500 ease-in-out hover:bg-[#0B1C36] hover:text-white hover:-translate-y-5 hover:z-10 hover:shadow-[10px_10px_20px_rgba(0,0,0,0.6),-1px_-1px_15px_rgba(0,0,0,0.1)] hover:border-[#CC8800] ">
      <img src={props.icon} alt={props.name} className="h-15 w-15" />
      <h1 className="font-bold text-center uppercase tracking-wide">
        {props.name}
      </h1>
      <p className="font-light text-center leading-relaxed text-xl">
        {props.detail}
      </p>
    </div>
  );
};

export default MissionCard;
