import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Porter",
      price: "$10",
      id: 23124,
    },
    {
      name: "Game of Thrones",
      price: "$22",
      id: 23545,
    },
    {
      name: "Inseption",
      price: "$14",
      id: 23225,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
