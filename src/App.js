import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Intro } from './components/Intro';
import { InfineteCarousel } from './components/InfineteCarousel';
import { About } from './components/About';
import { Story } from './components/Story';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Intro />
          <InfineteCarousel />
          <About />
          <Story />
          <Team />
          <Contact />
          <Faq />
          <Footer /> 
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
