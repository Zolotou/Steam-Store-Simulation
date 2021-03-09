import './App.scss';
import React, {useState, useEffect} from 'react';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [state, setState] = useState("Name of the game");
  const takeName = async () => {
    const api_host = "https://cors-anywhere.herokuapp.com/"
    const url = 'http://steamspy.com/api.php?request=top100in2weeks';
    const res = await fetch(api_host + url);
    const data = await res.json();
    const array = []
    for (let game in data){
      array.push(game);
    }
    setState(array.map(game => state.push(game.name)));
    console.log(state);
  }
  return (
    <div className="App">
        <Header />
        <Main takeName={takeName} nameOfTheGame={state}/>        
        <Footer />
    </div>
  );
}

export default App;
