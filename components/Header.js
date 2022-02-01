import hedaerStyle from "../styles/Header.module.css";
import React from "react";

function Header() {
  return (
    <div>
      <h1 className={hedaerStyle.title}>
        <span>WebDev</span>
      </h1>
      <p className={hedaerStyle.description}>
        Keep up to date with the lates web dev news
      </p>
    </div>
  );
}

export default Header;
