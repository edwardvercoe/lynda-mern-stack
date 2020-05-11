import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./App.css";
import PlayerList from "./Player/PlayerList";
import PlayerSingle from "./Player/PlayerSingle";
import PlayerForm from "./Player/PlayerForm";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({});

  function updateCurrentPlayer(item) {
    setCurrentPlayer(item);
  }

  // API CALL ON PAGE LOAD
  useEffect(() => {
    const url = "https://lynda-mern.herokuapp.com/players";

    fetch(url)
      .then((response) => response.json())
      .then((players) => setPlayers(players))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <nav>
          <div className="nav-wrapper blue darken-1">
            <a href="/" className="brand-logo">Soccer Management</a>
          </div>
        </nav>
      </div>

      <div className="row">
        <div className="col s3">
          <PlayerList
            players={players}
            updateCurrentPlayer={updateCurrentPlayer}
          />
        </div>
        <div className="col s9">
          <PlayerSingle player={currentPlayer} />
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <PlayerForm />
        </div>
      </div>
    </div>
  );
}

export default App;
