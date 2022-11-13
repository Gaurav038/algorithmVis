import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import Visualize from "./components/sorting/Visualize";
import BinarySearch from "./components/binarySearchComponent/binarySearch";
import Seive from './components/primeComponents/seive';
import './App.css'

function App() {
  return (
      <Router className="App">
            <Switch>
              <Route path='/sorting' component={Visualize}/>
              <Route path='/prime' component={Seive}/>
              <Route path='/binarySearch' component={BinarySearch}/>
              <Route path='/' component={Home}/>
            </Switch>
      </Router>             
  );
}

export default App;
