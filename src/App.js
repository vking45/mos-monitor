import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './screens/Home';
import Error from './screens/Error';

function App() {
  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error/" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
