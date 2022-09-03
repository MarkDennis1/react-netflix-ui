import React from "react";
import Row from "./components/Row";
import Banner from "./components/Banner";
import source from "./modules/api";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner API = {source.netflixOriginal}/>
      <Row title="Netflix Originals" API={source.netflixOriginal} />
      <Row title="History" API={source.historyMovies} />
      <Row title="Drama" API={source.dramaMovies} />
      <Row title="Action" API={source.actionMovies} />
      <Row title="Comedy" API={source.comedyMovies} />
      <Row title="Horror" API={source.horrorMovies} />
      <Row title="Romance" API={source.romanceMovies} />
      <Row title="Documentary" API={source.documentaryMovies} />
    </div>
  );
}

export default App;
