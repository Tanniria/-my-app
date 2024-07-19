import React from "react";
import logo from "../img/logo.png";
import Navbar from './Navbar';
import MobileNav from "./MobileNav";

export default function Header() {
    

    return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип с надписью Место" />

      <Navbar />

      {/* <MobileNav /> */}
    </header>

  );
}
