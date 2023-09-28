import { ReactNode, useState, FC } from "react";

const Box: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="box">
      <button className="btn-toggle" onClick={toggleOpen}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default Box;
