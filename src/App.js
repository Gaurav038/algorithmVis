import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Home/NavBar';
import { Footer } from './components/Home/Footer';
import { Banner } from './components/Home/Banner';
import { Projects } from './components/Home/Projects';
import Visualize from './components/Visualize';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Visualize />
      <Footer />
    </div>
  );
}

export default App;
