import App from "@/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "@/context";
import Layout from "@/layout/Layout";
import Home from "@/pages/Home";
import Databases from "@/pages/Databases";

const Router = () => {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Layout>
            <App>
              <Routes>
                <Route
                  path="/db1"
                  element={
                    <Databases>
                      <div>1</div>
                    </Databases>
                  }
                />
                <Route
                  path="/db2"
                  element={
                    <Databases>
                      <div>2</div>
                    </Databases>
                  }
                />
                <Route path="/" element={<Home />} />
              </Routes>
            </App>
          </Layout>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
};

export default Router;
