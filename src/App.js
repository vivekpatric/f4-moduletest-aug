import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import History from './components/History';
import WordDetails from './components/WordDetails';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/history" component={History} />
        <Route path="/word/:word" component={WordDetails} /> {/* Dynamic route */}
      </Switch>
    </Router>
  
    
  );
};

export default App;

