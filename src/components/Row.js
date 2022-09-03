import React, { useState, useEffect } from "react";
import "./Row.css";
import source from "../modules/api";
const baseURL = "https://image.tmdb.org/t/p/w300";

function Row({ title, API }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    function fetchData() {
      fetch(API, { signal })
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          setMovies(responseJson.results);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Request successfully aborted");
          }
        });
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [API]);

  function fetchHomepage(movieID) {
    fetch(
      `${
        title === "Netflix Originals"
          ? source.bannerBaseURL
          : source.movieBaseURL
      }${movieID}?api_key=${source.key}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        window.open(json.homepage, "_blank");
      });
  }

  const posters = movies.map((movie) => (
    <div
      onClick={() => fetchHomepage(movie.id)}
      className="poster"
      key={movie.id}
    >
      <img src={baseURL.concat(movie?.poster_path)} alt={movie.name} />
    </div>
  ));

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters_container">{posters}</div>
    </div>
  );
}

export default Row;
