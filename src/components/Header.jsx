import React, { useState, useEffect } from "react";
import "react-modern-drawer/dist/index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop < lastScrollTop) {
        // Scrolling up
        setIsScrollingUp(true);
      } else {
        // Scrolling down
        setIsScrollingUp(false);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className="flex items-start justify-center">
      <header
        className={`z-50 fixed mt-4 flex gap-10 md:gap-20 lg:gap-42 items-center justify-between h-[60px]  ${
          isScrollingUp
            ? "lg:w-[calc(80vw)] w-[calc(90vw)]"
            : "lg:w-[calc(60vw)] w-[calc(90vw-16px)]"
        } px-[5%] bg-white rounded-lg shadow-md shadow-black/5 transition-all duration-300`}
      >
        <a href="/">
          <div className="text-2xl text-purple-600 font-bold">Vikas.dev</div>
        </a>
        <nav>
          <ul className="hidden md:flex items-center gap-4 lg:gap-6 font-semibold text-lg">
            <a href="./" className="hover:text-purple-600 transition-all">
              <li>Home</li>
            </a>
            <a
              href="#projects"
              className="hover:text-purple-600 transition-all"
            >
              <li>Projects</li>
            </a>
            <a href="#contact" className="hover:text-purple-600 transition-all">
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
