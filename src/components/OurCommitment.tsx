import CommitmentCard from "./CommitmentCard";

const cardItems = [
  {
    image: "/Graphics/shield.png",
    title: "Your Peace of Mind is Our Priority",
    text: "Stop being the bottleneck in your own growth we handle the heavy lifting so you can focus on the big picture.",
  },
  {
    image: "/Graphics/globe.png",
    title: "The Global Bridge",
    text: "Access a world-class workforce that is fully trained and driven by global excellence.",
  },
  {
    image: "/Graphics/handshake.png",
    title: "We Don't Have Clients; We Have Partners.",
    text: "We aren't just a vendor; we are a dedicated partner whose success is 100% tied to your revenue and results",
  },
];

const OurCommitment = () => {
  return (
    <div className="min-h-screen">
      <div className="text-white font-bold text-3xl lg:text-5xl text-center py-8 lg:py-6">
        OUR COMMITMENT TO YOUR GROWTH
      </div>

      <div
        className="flex flex-col gap-8 lg:gap-10 w-full max-w-7xl mx-auto lg:p-10 bg-no-repeat bg-position-[98%_center] lg:bg-position-[75%_center] bg-size-[auto_100%] "
        style={{
          backgroundImage: `url("./Graphics/line2.png")`,
        }}
      >
        {cardItems.map((item, index) => (
          <CommitmentCard
            key={index}
            image={item.image}
            title={item.title}
            text={item.text}
            align={index % 2 === 0 ? "left" : "right"}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default OurCommitment;
