import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  async function deletMovieHandler () {
    const response = await fetch(`https://react-ecommerce-module-default-rtdb.firebaseio.com/movies/${props.id}.json`, {
      method: "DELETE"
    })
    if(!response.ok){
        console.log('Something Went Wrong')
    }
    console.log("deleted")
  }
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={deletMovieHandler} className={classes.button}>Delete Movie</button>
    </li>
  );
};

export default Movie;
