import React from "react";
import hippo from "./hippo.png";
import AnimalFans from "./containers/animal-fans";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="app-body">
        <img src={hippo} className="App-logo" alt="logo" />
        <h1>Top Animal Fans</h1>
        <AnimalFans />
      </section>
    </div>
  );
}

export default App;
