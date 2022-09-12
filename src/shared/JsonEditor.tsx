import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

const JsonEditor = ({ keyName = "myKey", objValue = `{}` }) => {
  const [newValue, setNewValue] = useState(objValue);

  useEffect(() => {
    const value = `const ${keyName} = ${formatData(objValue)}`;
    setNewValue(value);
  }, [objValue]);

  const formatData = (jsonData: any) => {
    const formattedJson = JSON.stringify(JSON.parse(jsonData), null, 2);
    const quotesRemoved = formattedJson.replace(/"([^"]+)":/g, "$1:");
    return quotesRemoved;
  };

  return (
    <main className="border-2 p-2 rounded">
      {/* {JSON.stringify(newValue)} */}
      <Editor
        height="50vh"
        options={{ fontSize: 18 }}
        defaultLanguage="javascript"
        theme="vs-dark"
        onChange={(value) => setNewValue(value as string)}
        defaultValue={newValue}
      />
    </main>
  );
};

export default JsonEditor;
