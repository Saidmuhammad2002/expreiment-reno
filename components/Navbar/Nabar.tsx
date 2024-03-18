import Image from "next/image";
import cls from "./Navbar.module.css";
import logo from "@/public/icons/logo.svg";

const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <Image src={logo} alt="logo" className={cls.logo} />
    </nav>
  );
};

export default Navbar;
