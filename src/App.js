import React from "react";
import "./App.css";
import MovieList from "./movie-list";
import Nav from "./nav";
import { MovieProvider } from "./movie-context";
import AddMovies from "./add-movies";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <AddMovies />
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
