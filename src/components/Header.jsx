import React from "react";
import BackgroundImage from "./BackgroundImage";

const Header = () => {
  return (
    <header>
      <BackgroundImage />
      <h1 className="first-heading">
        Word <i className="first-heading--thin">Analytics</i>
      </h1>
    </header>
  );
};

export default Header;
