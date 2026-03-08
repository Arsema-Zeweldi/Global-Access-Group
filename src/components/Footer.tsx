import { FaTiktok, FaInstagram, FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center gap-4 lg:p-10">
      <div className="flex justify-center">
        <img
          src="src/assets/Logo/Global-Access-Group.png"
          alt="Logo"
          className="h-auto w-20 lg:w-40"
        />
      </div>

      <div className="flex justify-center items-center gap-6 my-2">
        <a
          href="https://www.tiktok.com/@globalaccessgroup"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#D6AF4E] transition-colors duration-300"
        >
          <FaTiktok size={24} className="lg:size-7" />
        </a>
        <a
          href="https://www.instagram.com/globalaccessgroup?igsh=MXhqZGd5amplYWhqcw=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#D6AF4E] transition-colors duration-300"
        >
          <FaInstagram size={24} className="lg:size-7" />
        </a>
        <a
          href="https://t.me/+HlM2uq0iSydkNGRk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#D6AF4E] transition-colors duration-300"
        >
          <FaTelegram size={24} className="lg:size-7" />
        </a>
      </div>

      <div className="w-full flex justify-center gap-1 lg:gap-4 text-white font-light text-[12px] lg:text-xl">
        <p>COPYRIGHT @ 2026</p>
        <div className="h-5 w-px bg-white/80" />
        <p>ALL RIGHTS RESERVED</p>
        <div className="h-5 w-px bg-white/80" />
        <p>PRIVACY POLICY</p>
      </div>
      <div className="text-center text-white font-light mb-6">
        GLOBAL OUTSOURCING COMPANY
      </div>
    </div>
  );
};

export default Footer;
