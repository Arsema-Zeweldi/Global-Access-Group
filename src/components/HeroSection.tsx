const Hero = () => {
  return (
    <div className="text-white mt-30">
      <h1 className="font-regular text-[60px] text-center">
        WHERE CAPABILITY MEETS <br /> CONSISTENCY
      </h1>
      <p className="font-extralight text-center text-[20px]">
        OnBoarding New Talents Within Days
      </p>
      <div className="flex justify-center gap-4 mt-15">
        <button className="border border-white p-3 px-8 rounded-xl bg-gold-grad hover:bg-gold-grad-hover cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
          FIND TALENT
        </button>

        <button className="border border-white p-3 px-8 rounded-xl cursor-pointer hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          FIND WORK
        </button>
      </div>
    </div>
  );
};

export default Hero;
