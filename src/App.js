import './App.scss';
import React, { useState, useEffect } from 'react';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";

function App() {
  const [state, setState] = useState("Name of the game");
  const takeName = async () => {
    const url = 'http://steamspy.com/api.php?request=top100in2weeks';
    const res = await fetch(url);
    const data = await res.json();
    const array = Object.entries(data).map((item) => ({ ...item[1] })).sort((first, second) => second.ccu - first.ccu)
    console.log(array)
    // const array = []
    // for (let game in data){
    //   array.push(game);
    // }
    setState("lol");
    // console.log(data);
  }

  return (
    <div className="App">
      <Header />
      <Main takeName={takeName} nameOfTheGame={state} />
      <Footer />
    </div>
  );
}


export default App;
