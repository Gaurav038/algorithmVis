import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Visualize from "./components/sorting/Visualize";
import BinarySearch from "./components/binarySearchComponent/binarySearch";
import Seive from './components/primeComponents/seive';
import Queen from './components/queenComponents/queen'
import { Projects } from './components/Home/Projects';
import './App.css'

function App() {
  return (
      <Router className="App">
            <Switch>
              <Route path='/sorting' component={Visualize}/>
              <Route path='/prime' component={Seive}/>
              <Route path='/binarySearch' component={BinarySearch}/>
              <Route path='/nqueen' component={Queen}/>
              <Route path='/' component={Projects}/>
            </Switch>
      </Router>             
  );
}

export default App;
