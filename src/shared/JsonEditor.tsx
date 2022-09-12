import Editor from "@monaco-editor/react";

const JsonEditor = ({
  keyName = "myKey",
  objValue = `{ "sample": "data" }`,
}) => {
  const formatData = (jsonData: any) => {
    const formattedJson = JSON.stringify(JSON.parse(jsonData), null, 2);
    const quotesRemoved = formattedJson.replace(/"([^"]+)":/g, "$1:");
    return quotesRemoved;
  };

  return (
    <main className="border-2 p-2 rounded">
      <Editor
        height="50vh"
        options={{ fontSize: 18 }}
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={`const ${keyName} = ${formatData(objValue)}`}
      />
    </main>
  );
};

export default JsonEditor;
