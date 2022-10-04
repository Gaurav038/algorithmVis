import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Home/NavBar';
import { Footer } from './components/Home/Footer';
import { Banner } from './components/Home/Banner';
import { Projects } from './components/Home/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
