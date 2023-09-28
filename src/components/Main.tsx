import { ReactNode, FC } from "react";

const Main: FC<{ children: ReactNode }> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Main;
