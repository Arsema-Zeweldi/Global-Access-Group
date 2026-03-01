import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-transparent glass-effect items-center">
      <div className="flex gap-2 items-center pt-2 pl-4">
        <img
          src="src/assets/Logo/Global-Access-Group.png"
          alt="Logo"
          className="h-15 w-18"
        />
        <p className="text-white font-regular">GLOBAL ACCESS GROUP</p>
      </div>
      <div>
        <nav className="flex items-center justify-between gap-6 text-white font-light text-[12px] tracking-widest py-6 px-10">
          <Link
            to="/"
            className="hover:text-blue-400 transition-colors uppercase"
          >
            Home
          </Link>

          <div className="h-5 w-px bg-white/80" />

          <Link
            to="/mission"
            className="hover:text-blue-400 transition-colors uppercase"
          >
            Our Mission
          </Link>

          <div className="h-5 w-px bg-white/80" />

          <Link
            to="/services"
            className="hover:text-blue-400 transition-colors uppercase"
          >
            Our Service
          </Link>

          <div className="h-5 w-px bg-white/80" />

          <Link
            to="/about"
            className="hover:text-blue-400 transition-colors uppercase"
          >
            About Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
