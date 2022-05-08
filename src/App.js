import './App.css';
import './App-mid.css';
import FixedIcons from './components/FixedIcons';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home'
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />

        <FixedIcons />

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
