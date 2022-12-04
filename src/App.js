import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './screens/Home';
import Error from './screens/Error';
import Splash from './screens/Splash';

function App() {
  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route path="/" element={<Splash />}/>
          <Route path="/home/" element={<Home />} />
          <Route path="/error/" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
