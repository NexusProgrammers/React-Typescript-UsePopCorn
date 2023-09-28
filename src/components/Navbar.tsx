import { ReactNode, FC } from "react";
import Logo from "./Logo";

const Navbar: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
};

export default Navbar;
