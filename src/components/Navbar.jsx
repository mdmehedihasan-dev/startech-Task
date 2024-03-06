import Logo from "../assets/logo.png";
import { FaSearch, FaUser } from "react-icons/fa";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { IoMdFlash } from "react-icons/io";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="bg-nav">
      <Container>
        <div className="flex items-center py-4 gap-x-10 ">
          {/* logo  */}
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          {/* input box  */}
          <div className="relative w-auto lg:w-725">
            <input
              type="text"
              className="w-full px-3 py-3 rounded-md placeholder:font-bold placeholder:text-lg"
              placeholder="Search"
            />
            <FaSearch className="absolute right-3 top-[30%] text-2xl" />
          </div>

          {/* menu items  */}

          <div className="flex items-center gap-x-5">
            <MdOutlineCardGiftcard className="text-4xl text-icon" />
            <div>
              <p className="text-xl font-bold text-white">Offers</p>
              <span className="text-color2">Latest Offers</span>
            </div>
          </div>
          <div className="flex items-center gap-x-5">
            <IoMdFlash className="text-3xl text-icon" />
            <div>
              <p className="text-xl font-bold text-white">17th Deals</p>
              <span className="text-color2">Special Deals</span>
            </div>
          </div>
          <div className="flex items-center gap-x-5">
            <FaUser className="text-2xl text-icon" />
            <div>
              <p className="text-xl font-bold text-white">Account</p>
              <span className="text-color2">Register or Login</span>
            </div>
          </div>

          {/* buttons */}
          <button className="bg-[rgb(70,83,165)] px-5 py-4 text-white font-bold rounded-md">
            PC Builder
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
