import { createContext, useReducer } from "react";

const initialState = {
  user: {
    uid: "123",
    displayName: "John Doe",
  },
};

export const GlobalContext = createContext(initialState);

//* REDUCER - update state to payload based on action type passed in from dispatch
const reducers = (state: any, action: any) => {
  switch (action.type) {
    case "SET_USER":
      const user = action?.payload || null;
      if (!!user) localStorage.setItem("bananaUser", JSON.stringify(user));

      return { ...state, user };

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

  const globalState = {
    //* STATE (getters)
    user: state.user,
    isAuthenticated: !!state.user?.uid,

    //* ACTIONS
    setUser,
  };
  return (
    <GlobalContext.Provider value={globalState}>
      {children}
    </GlobalContext.Provider>
  );
};
