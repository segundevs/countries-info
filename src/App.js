import Header from './components/Header';
import Details from './pages/Details'
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details/:name" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
