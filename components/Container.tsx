import React from "react";

interface props {
  children: React.ReactNode;
}

const Container = ({ children }: props) => {
  return <div className="custom-container">{children}</div>;
};

export default Container;
