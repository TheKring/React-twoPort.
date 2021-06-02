import React from "react";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import { Navigation, Footer, Home, About, Styles, Contact } from "./components";
import { AnimatePresence } from 'framer-motion';

function App() {
   return (
    <div className="App">
      <Router>
        <Navigation />
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/about" exact component={() => <About />} />
              <Route path="/styles" exact component={() => <Styles />} />
              <Route path="/contact" exact component={() => <Contact />} />
            </Switch>
          </AnimatePresence>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
