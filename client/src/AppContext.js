import React, { useState } from "react";

const AppContext = React.createContext();

// Use AppProvider at the root of your project to provided to all children
const AppProvider = ({ children }) => {

  const [movieInfo, SetMovieInfo] = useState( {
    title: ''
  });

  const values = {
    movieInfo
  };

  const setters = {
    SetMovieInfo
  };

  return (
    <AppContext.Provider value={{values, setters}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };