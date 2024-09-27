import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofils } from "../../content_option";
import Themetoggle from "../themetoggle";
import { HashLink } from 'react-router-hash-link';
import { useAnimationFrame } from "framer-motion";

export const Headermain = () => {
  const [isActive, setActive] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get current scroll position
      const windowHeight = window.innerHeight - 40; // Get the viewport height

      if (scrollPosition > windowHeight) {
        setIsTransparent(true); // When user scrolls past 100vh, set to transparent
      } else {
        setIsTransparent(false); // Before 100vh, keep the background solid
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up listener
    };
  }, []);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };
  

  return (
    <>
      <header className="site__header">
        <div className={`container_header ${isTransparent ? "transparent" : ""}`}>
          <Themetoggle className={`${isTransparent ? "ac_transparent" : ""}`} />
          <HashLink  className={`navbar-brand nav_ac ${isTransparent ? "ac_transparent" : ""}`} to="/#home">
            {logotext}
          </HashLink>
          <button className={`menu__button  nav_ac ${isTransparent ? "ac_transparent" : ""}`}>{/* onClick={handleToggle} */}
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <HashLink  onClick={handleToggle} to="/#home" className="my-3">Home</HashLink>
                  </li>
                  <li className="menu_item">
                    <HashLink  onClick={handleToggle} to="/#portfolio" className="my-3"> Portfolio</HashLink>
                  </li>
                  <li className="menu_item">
                  <HashLink onClick={handleToggle} to="/#about" className="my-3">About</HashLink>
                  </li>
                  <li className="menu_item">
                  <HashLink onClick={handleToggle} to="/#contact" className="my-3"> Contact</HashLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            <a href={socialprofils.linkedin}>Linkedin</a>
            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </div>
        </div>
      </header>
    </>
  );
};

