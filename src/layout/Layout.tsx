import { useState, useEffect } from "react";
import { Props } from "@/types/general";
import React from "react";
import logo from "@/assets/react.svg";
import {
  Cog6ToothIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

const Layout: React.FC<Props> = ({ children }) => {
  const [sidebarWidth, setSidebarWidth] = useState("250px");
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  useEffect(() => {
    if (sidebarWidth === "250px") {
      setSidebarIsOpen(true);
    } else setSidebarIsOpen(false);
  }, [sidebarWidth]);

  const toggleSidebarSize = () => {
    setSidebarWidth(sidebarIsOpen ? "64px" : "250px");
  };

  return (
    <div className="flex w-full h-screen absolute">
      <section className="absolute flex w-full ">
        <header
          style={{ marginLeft: sidebarWidth }}
          className="bg-gray-200 h-16 w-full flex"
        >
          <div className="w-full flex justify-end mx-8">
            <div
              id="avatar"
              className="rounded-full bg-blue-500 h-12 w-12 my-auto flex justify-center items-center"
            >
              A
            </div>
          </div>
        </header>
      </section>
      <div
        id="sidebar"
        style={{ width: sidebarWidth }}
        className="bg-gray-900 h-full absolute flex flex-col justify-between"
      >
        <header>
          <div className="w-full h-16 flex">
            <div id="logo-wrapper" className="flex m-auto">
              {sidebarIsOpen && (
                <span className="text-white text-2xl m-auto">EasyDB</span>
              )}
              <img
                style={{
                  marginLeft: sidebarIsOpen ? "16px" : "auto",
                }}
                className={["h-8", sidebarIsOpen && "ml-4"].join(" ")}
                src={logo}
                alt="logo"
              />
            </div>
          </div>
          <section className="w-full h-16 flex border-y-2">
            <div
              id="logo-wrapper"
              className="flex m-auto w-full justify-between mx-4"
            >
              {sidebarIsOpen && (
                <span className="text-white w-full text-md my-auto border-r-2">
                  Databases
                </span>
              )}
              <div
                style={{
                  marginLeft: sidebarIsOpen ? "16px" : "auto",
                }}
                className="flex mx-auto"
              >
                <Cog6ToothIcon className="w-6 text-white m-auto" />
              </div>
            </div>
          </section>
        </header>
        <section className="flex relative flex-col h-full">
          <ul className="text-white p-4 align-top mt-4">
            {["item 1", "item 2"].map((item) => (
              <li className="h-12">{item}</li>
            ))}
          </ul>
        </section>
        <footer className="flex w-full justify-end border-t-2">
          <button onClick={toggleSidebarSize} className="flex p-4">
            {sidebarIsOpen ? (
              <ChevronLeftIcon className="w-6 text-white" />
            ) : (
              <ChevronRightIcon className="w-6 text-white" />
            )}
          </button>
        </footer>
      </div>
      <main className="overflow-auto">{children}</main>
    </div>
  );
};

export default Layout;
