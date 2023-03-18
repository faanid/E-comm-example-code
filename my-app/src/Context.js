import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  console.log(allPhotos);

  return <Context.Provider value={{ allPhotos }}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
