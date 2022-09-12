import { useState, useEffect } from "react";
import React, { useContext } from "react";
import { Props } from "@/types/general";
import logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import {
  Cog6ToothIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import useAuth from "@/hooks/useAuth";
import useApi from "@/hooks/useApi";
import { GlobalContext } from "@/context";

const Layout: React.FC<Props> = ({ children }) => {
  const { databaseList, setDatabaseList, setDocName, docName } =
    useContext(GlobalContext);
  const [sidebarWidth, setSidebarWidth] = useState("250px");
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
  const { logout } = useAuth();
  const { api } = useApi();

  useEffect(() => {
    api.get("/databasesByUser").then(({ data }) => {
      setDatabaseList(data?.documents);
    });
  }, []);

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
      <section className="absolute flex w-full">
        <header
          style={{ marginLeft: sidebarWidth }}
          className="bg-gray-600 h-16 w-full flex transition-all shadow-md"
        >
          <div className="w-full flex justify-end mx-8">
            <button
              onClick={logout}
              id="avatar"
              className="rounded-full bg-blue-500 h-12 w-12 my-auto flex justify-center items-center"
            >
              A
            </button>
          </div>
        </header>
      </section>
      <div
        id="sidebar"
        style={{ width: sidebarWidth }}
        className="bg-gray-900 h-full absolute flex flex-col justify-between transition-all"
      >
        <header>
          <Link to="/" className="w-full h-16 flex">
            <div id="logo-wrapper" className="flex m-auto">
              {sidebarIsOpen && (
                <span className="text-white text-2xl m-auto">MVP DB</span>
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
          </Link>
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
              <button
                style={{
                  marginLeft: sidebarIsOpen ? "16px" : "auto",
                }}
                className="flex mx-auto"
              >
                <Cog6ToothIcon className="w-6 text-white m-auto" />
              </button>
            </div>
          </section>
        </header>
        <section className="flex relative flex-col h-full">
          {databaseList?.length && (
            <ul className="text-white p-4 align-top mt-4">
              {databaseList?.map((documentName: any, i: number) => (
                <li key={i} className="h-12">
                  <button
                    onClick={() => {
                      console.log(documentName);
                      setDocName(documentName);
                      window.location.href = "/db/" + documentName;
                    }}
                  >
                    {documentName}
                  </button>
                  {/* <Link to={`/db/${documentName}`}>{documentName}</Link> */}
                </li>
              ))}
            </ul>
          )}
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
      <main
        style={{ marginLeft: sidebarWidth, backgroundColor: "#1E1E1E" }}
        className="overflow-auto relative top-16 w-full transition-all h-[calc(100%-64px)]"
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
