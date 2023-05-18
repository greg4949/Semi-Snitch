import React from 'react';
import Header from './components/Header';
import Footer from "./components/Footer"
import Scan from './components/Scan';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route
            path= '/'
            element= {<Scan/>}/>
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
