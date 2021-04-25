import './App.scss';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import { Route, Switch } from 'react-router';
import Score from './components/Score/Score';
import About from './components/About/About';


function App() {
  // const [state, setState] = useState("Name of the game");
  // const takeName = async () => {
  //   const url = 'http://steamspy.com/api.php?request=top100in2weeks';
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   const array = Object.entries(data).map((item) => ({ ...item[1] })).sort((first, second) => second.ccu - first.ccu)
  //   console.log(array)
  //   // const array = []
  //   // for (let game in data){
  //   //   array.push(game);
  //   // }
  //   setState("lol");
  //   // console.log(data);
  // }

  const store = configureStore();

  return (
    <Provider store={store}>
      <div className="App">
        <div className="wrapper">
          <Header />
          <main className="main">
            <div className="container">
              <Switch>
                <Route exact path="/" c render={() => <Main name={'asdfsdf'} />}></Route>
                <Route path="/score" render={() => <Score />}></Route>
                <Route path="/about" render={() => <About />}></Route>
              </Switch>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </Provider>

  );
}


export default App;
