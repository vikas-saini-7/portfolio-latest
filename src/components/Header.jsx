import React from "react";
import { IconMenu, IconX } from "@tabler/icons-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <header className="z-50 relative flex items-center justify-between h-[80px] px-[5%] bg-white shadow-md shadow-black/5">
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
            <a
              target="_blank"
              href="https://vikas-saini-blog.vercel.app"
              className="hover:text-purple-600 transition-all"
            >
              <li>Blog</li>
            </a>
          </ul>
          <div
            onClick={toggleDrawer}
            className="md:hidden p-2 rounded hover:bg-gray-200 cursor-pointer"
          >
            <IconMenu />
          </div>
        </nav>
      </header>
      <div className="md:hidden">
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          size="70%"
        >
          <div className="p-8">
            <div
              onClick={toggleDrawer}
              className="mb-12 p-2 rounded hover:bg-gray-200 cursor-pointer w-fit"
            >
              <IconX className="" />
            </div>
            <ul className="flex flex-col gap-4 font-semibold text-2xl">
              <a
                onClick={toggleDrawer}
                href="./"
                className="hover:text-purple-600 transition-all"
              >
                <li>Home</li>
              </a>
              <a
                onClick={toggleDrawer}
                href="#about"
                className="hover:text-purple-600 transition-all"
              >
                <li>About</li>
              </a>
              <a
                onClick={toggleDrawer}
                href="#projects"
                className="hover:text-purple-600 transition-all"
              >
                <li>Projects</li>
              </a>
              <a
                onClick={toggleDrawer}
                href="#contact"
                className="hover:text-purple-600 transition-all"
              >
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Header;
