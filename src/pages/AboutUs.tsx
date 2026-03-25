import FounderCard from "@/components/FounderCard";
import Footer from "@/components/Footer";

const founders = [
  {
    name: "BRUH Co-Founder and Partnership Director",
    image: "./Images/founders/Bruh.png",
    text: "Co-founder and growth operator specializing in high-volume outreach, pipeline development, and client acquisition, with a proven track record of turning cold prospects into consistent revenue opportunities across multiple industries.",
  },
  {
    name: "SURA Co-Founder and Partnership Director",
    image: "./Images/founders/sura.png",
    text: "Results-driven professional with proven strength in sales, lead generation, and client relationship management, consistently turning opportunities into growth.With a background in Marketing Management, I bring a strategic, adaptable approach to execution.",
  },
  {
    name: "LIYDYA Co-Founder and Head of Talent Strategy",
    image: "./Images/founders/lidya.png",
    text: "Lidya Mitiku Tegegne is one of the Founders of Global Access Group, a global outsourcing firm built to help businesses scale efficiently through high-performing remote talent and streamlined systems. With a background in Economics and over three years of high-volume B2B growth experience, Lidya has driven measurable results — generating consistent pipeline growth, increasing new business by 35%, and closing over $50K in strategic deals.",
  },
  {
    name: "PHILI  Co-Founder and Head of Talent Acquisition",
    image: "./Images/founders/phli.png",
    text: "Phil has produced strong sales outcomes, overseeing the entire sales process in high-volume outbound environments, standing out in lead generation and pipeline development, and as an Appointment Setter consistently creating qualified opportunities and closing between $500K–$1M in high-value deals across multiple sectors.",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-myBlue">
      <div className="flex justify-between items-center bg-about-blue py-3 lg:py-6 rounded-b-4xl shadow-lg shadow-[#8E8E8E]/25">
        <a href="/">
          <img
            src="./Logo/Global-Access-Group.png"
            alt="Logo"
            className="h-15 lg:h-20 w-auto brightness-85"
          />
        </a>

        <h1 className="text-center text-white text-2xl lg:text-4xl font-extrabold">
          ABOUT US
        </h1>
        <div></div>
      </div>
      <div className="mt-10 pt-15 mb-10 bg-about-hero-faded min-h-screen">
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
