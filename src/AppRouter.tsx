import { useContext, useEffect, useState } from "react";
import App from "@/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "@/context";
import Layout from "@/layout/Layout";
import Home from "@/pages/Home";
import DatabaseEditor from "@/pages/DatabaseEditor";
import { GlobalContext } from "@/context";
import Auth from "@/layout/Auth";
import GlobalStateView from "@/debug/GlobalStateView";

const Router = () => {
  const { user } = useContext(GlobalContext);
  const [debug, setDebug] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!user?.uid);

  useEffect(() => {
    setIsAuthenticated(!!user?.uid);
  }, [user]);

  useEffect(() => {
    const handler = ({ key }: { key: any }) => key === "=" && setDebug(!debug);
    document.addEventListener("keypress", handler);
    return () => document.removeEventListener("keypress", handler);
  });

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          {isAuthenticated ? (
            <Layout>
              <App>
                <Routes>
                  <Route path={`/db/*`} element={<DatabaseEditor />} />
                  <Route path="/" element={<Home />} />
                </Routes>
              </App>
            </Layout>
          ) : (
            <Auth />
          )}
          {debug && <GlobalStateView />}
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
};

export default Router;
