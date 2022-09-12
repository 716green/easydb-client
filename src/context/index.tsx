import { createContext, useReducer } from "react";

const valueFromCache = (key: string) => {
  const cachedState = JSON.parse(localStorage.getItem("mvpDBState") || "{}");
  return cachedState[key] || null;
};

const initialState: {
  [key: string]: any;
} = {
  user: valueFromCache("user") || null,
  credential: valueFromCache("credential") || null,
  databaseList: valueFromCache("databaseList") || [],
  docName: valueFromCache("docName") || null,
};

export const GlobalContext = createContext(initialState);

//* REDUCER - update state to payload based on action type passed in from dispatch
const reducers = (state: any, action: any) => {
  switch (action.type) {
    case "SET_USER":
      const user = action?.payload || null;
      localStorage.setItem("mvpDBState", JSON.stringify({ ...state, user }));
      return { ...state, user };

    case "SET_CREDENTIAL":
      const credential = action?.payload || null;
      localStorage.setItem(
        "mvpDBState",
        JSON.stringify({ ...state, credential })
      );
      return { ...state, credential };

    case "SET_DATABASE_LIST":
      const databaseList = action?.payload || null;
      localStorage.setItem(
        "mvpDBState",
        JSON.stringify({ ...state, databaseList })
      );
      return { ...state, databaseList };

    case "SET_DOC_NAME":
      const docName = action?.payload || null;
      localStorage.setItem("mvpDBState", JSON.stringify({ ...state, docName }));
      return { ...state, docName };

    case "CLEAR_STATE":
      console.log("clearing state");
      localStorage.removeItem("mvpDBState");
      return { ...initialState };

    default:
      return { ...state };
  }
};

// Provider component - wraps the entire app and provides access to the global state object
export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  //* ACTIONS
  const setUser = (user: any) => {
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  };

  const setCredential = (credential: any) => {
    dispatch({
      type: "SET_CREDENTIAL",
      payload: credential,
    });
  };

  const setDatabaseList = (databaseList: string[]) => {
    dispatch({
      type: "SET_DATABASE_LIST",
      payload: databaseList,
    });
  };

  const setDocName = (docName: string) => {
    dispatch({
      type: "SET_DOC_NAME",
      payload: docName,
    });
  };

  const clearState = () => {
    dispatch({
      type: "CLEAR_STATE",
      payload: null,
    });
  };

  const globalState: any = {
    //* STATE
    user: state.user,
    credential: state.credential,
    databaseList: state.databaseList,
    docName: state.docName,

    //* ACTIONS
    setUser,
    setCredential,
    clearState,
    setDatabaseList,
    setDocName,
  };
  return (
    <GlobalContext.Provider value={globalState}>
      {children}
    </GlobalContext.Provider>
  );
};
