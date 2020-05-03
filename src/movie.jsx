import React from "react";

const Movie = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <span>{price}</span>
    </div>
  );
};

export default Movie;
