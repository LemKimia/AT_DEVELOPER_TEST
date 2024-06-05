import { ReactNode } from "react";
import Navbar from "./navbar";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <div className="font-display">
      <Navbar />
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default Layout;
