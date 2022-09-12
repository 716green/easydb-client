import React, { useState, useEffect, useContext } from "react";
import JsonEditor from "@/shared/JsonEditor";
import useApi from "@/hooks/useApi";
import { GlobalContext } from "@/context";

const Databases = () => {
  const { api } = useApi();
  const [document, setDocument] = useState("{}");
  const { docName } = useContext(GlobalContext);

  useEffect(() => {
    api.post("/documentByUserAndKey", { docName }).then(({ data }) => {
      setDocument(data.document.docValue);
    });
  }, [docName]);

  return <JsonEditor keyName={docName} objValue={JSON.stringify(document)} />;
};

export default Databases;
