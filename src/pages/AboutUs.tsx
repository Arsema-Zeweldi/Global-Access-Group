import Navbar from "@/components/Navbar";
import FounderCard from "@/components/FounderCard";
import Footer from "@/components/Footer";

const founders = [
  {
    name: "Bruh",
    image: "/temp/server1.png",
    text: "TBD",
  },
  {
    name: "Bruh",
    image: "/temp/server1.png",
    text: "TBD",
  },
  {
    name: "Bruh",
    image: "/temp/server1.png",
    text: "TBD",
  },
  {
    name: "Bruh",
    image: "/temp/server1.png",
    text: "TBD",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-myBlue">
      <Navbar />
      <div>
        <h1 className="text-center text-white text-4xl font-extrabold">
          ABOUT US
        </h1>
      </div>
      <div className="mt-10 py-20 mb-10 bg-about-hero min-h-screen">
        <div className="flex flex-col gap-6 w-full">
          {founders.map((founder, index) => (
            <FounderCard
              image={founder.image}
              name={founder.name}
              text={founder.text}
              align={index % 2 === 0 ? "left" : "right"}
              index={index}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
