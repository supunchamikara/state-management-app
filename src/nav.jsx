import React, { useContext } from "react";
import { MovieContext } from "./movie-context";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>Supun Dev</h3>
      <span>Movie list : {movies.length}</span>
    </div>
  );
};

export default Nav;
