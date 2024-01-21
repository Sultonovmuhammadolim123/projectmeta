import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import img1 from "./imgs/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={img1} alt="" />
      <ul className="navbar__menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
          <li>
          <NavLink to="kompani">О компании</NavLink>
        </li>
        <li>
          <NavLink to="otziv">Отзывы</NavLink>
        </li>
        <li>
          <NavLink to="registration">Registration</NavLink>
        </li>
       
        <li>
          <NavLink to="contact">Контакты</NavLink>
        </li>
      </ul>
      <div className="navbar__icon">
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaSquareTwitter /></a>
      </div>
    </div>
  );
};

export default Navbar;
