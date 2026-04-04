import { useState } from "react";
import { Link } from "react-router";
import { HiX } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (isOpen) closeMenu();
  };

  return (
    <div className="relative bg-navbar lg:bg-none lg:bg-transparent duration-300 shadow-lg glass-effect  shadow-[#8E8E8E]/25 ">
      <div className="flex justify-between items-center py-2 lg:py-0 px-4 lg:pl-4 lg:pr-15">
        <div className="flex gap-2 items-center">
          <img
            src="./Logo/Global-Access-Group.png"
            alt="Logo"
            className="h-14 lg:h-15 w-auto"
          />
          <p className="text-white text-lg font-bold hidden lg:block ">
            GLOBAL ACCESS GROUP
          </p>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-white font-bold tracking-widest py-6">
          <Link
            to="/"
            className="hover:text-[#FFE4AE] transition-colors uppercase"
          >
            Home
          </Link>
          <div className="h-5 w-px bg-white/80" />
          <a
            href="#mission"
            onClick={(e) => handleScroll(e, "mission")}
            className="hover:text-[#FFE4AE] transition-colors uppercase"
          >
            Our Mission
          </a>
          <div className="h-5 w-px bg-white/80" />
          <a
            href="#services"
            onClick={(e) => handleScroll(e, "services")}
            className="hover:text-[#FFE4AE] transition-colors uppercase"
          >
            Our Service
          </a>
          <div className="h-5 w-px bg-white/80" />
          <Link
            to="/about"
            className="hover:text-[#FFE4AE] transition-colors uppercase"
          >
            About Us
          </Link>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-3xl z-50 focus:outline-none"
        >
          {isOpen ? <HiX /> : <GiHamburgerMenu />}
        </button>
      </div>

      <div
        className={`
        fixed inset-0 min-h-screen bg-[#0B1C36]/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out lg:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <nav className="flex flex-col items-center gap-8 text-white font-light text-xl tracking-[0.2em] uppercase">
          <Link to="/" onClick={closeMenu} className="hover:text-[#FFE4AE]">
            Home
          </Link>
          <a
            href="#mission"
            onClick={(e) => handleScroll(e, "mission")}
            className="hover:text-[#FFE4AE]"
          >
            Our Mission
          </a>
          <a
            href="#services"
            onClick={(e) => handleScroll(e, "services")}
            className="hover:text-[#FFE4AE]"
          >
            Our Service
          </a>
          <Link
            to="/about"
            onClick={closeMenu}
            className="hover:text-[#FFE4AE]"
          >
            About Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
