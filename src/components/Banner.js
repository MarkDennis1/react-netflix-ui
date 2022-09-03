import React, { useState, useEffect } from "react";
import "./Banner.css";
import source from "../modules/api";
const baseURL = "https://image.tmdb.org/t/p/original/";

function Banner(API) {
  const [bannerInfo, setBannerInfo] = useState([]);
  const [genres, setGenres] = useState([]);
  const [year, setYear] = useState();
  const [movieID, setMovieID] = useState(0);
  const i = Math.floor(Math.random() * 19) + 1;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    function fetchBanner() {
      fetch(API.API, { signal })
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          setMovieID(responseJson.results[i].id);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Request successfully aborted")
          }
        });
    }
    fetchBanner();

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (movieID !== 0) {
    fetch(`${source.bannerBaseURL}${movieID}?api_key=${source.key}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setBannerInfo(responseJson);
        setYear(responseJson.first_air_date.substring(0, 4));
        const genreCollection = responseJson.genres;
        let genreStr = "";
        genreCollection.forEach((genre) => {
          genreStr = genreStr + " " + genre.name;
        });
        setGenres(genreStr);
        setMovieID(0);
      });
  }

  function play() {
    window.open(bannerInfo.homepage, "_blank");
  }

  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          "linear-gradient(90deg, #111 10%, transparent 100%), " +
          "linear-gradient(to top, #111 3%, transparent 70%), " +
          "url(" +
          baseURL +
          bannerInfo?.backdrop_path +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_title">
        {bannerInfo.name || bannerInfo.original_name}
      </div>

      <div className="banner_info">
        <div className="banner_points">
          Rating: {bannerInfo.vote_average?.toFixed(1)}
        </div>
        <div>{year}</div>
        <div>
          {bannerInfo.number_of_seasons === 1
            ? `${bannerInfo.number_of_seasons} Season`
            : `${bannerInfo.number_of_seasons} Seasons`}
        </div>
      </div>

      <div className="banner_overview">{bannerInfo.overview}</div>
      <div className="banner_buttons">
        <div onClick={play} className="banner_playButton">
          ▶ Play
        </div>

        <div className="banner_myListButton">+ My List</div>
      </div>
      <div className="banner_genres">
        <strong>Genres: </strong>
        {genres}
      </div>
    </div>
  );
}

export default Banner;
