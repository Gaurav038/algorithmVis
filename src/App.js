import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import Visualize from "./components/sorting/Visualize";


function App() {
  return (
      <Router className="App">
            <Switch>
              <Route path='/sorting' component={Visualize}/>
              <Route path='/' component={Home}/>
            </Switch>
      </Router>             
  );
}

export default App;
