import App from "@/App";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "@/context";
import Layout from "@/layout/Layout";

const Router = () => {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Layout>
            <App />
          </Layout>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
};

export default Router;
