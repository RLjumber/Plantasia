import Header from './components/Header';
import Home from './components/Home';
import SingleViewPlant from './components/SingleViewPlant';
import { Routes, Route } from 'react-router-dom';
// import Switch from 'react-router-dom/Switch';

function App() {
  return (
      <div className="App">
        <Header />
          <Routes>
            <Route exact path='/' Component={Home}/>
            <Route exact path='/plant' Component={SingleViewPlant}/>
            <Route exact path="/plants/:id" component={SingleViewPlant} />
          </Routes>
      </div>
  );
}

export default App;


// Switch not working, cannot be imported for some reason. Tried reinstalling the latest react-router but still no luck. Just using Route components here