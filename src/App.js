import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import ScienceNews from './components/ScienceNews/ScienceNews';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/scienceNews">
            <ScienceNews></ScienceNews>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
