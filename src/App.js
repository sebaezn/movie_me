import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import TopAiring from './components/TopAiring'
import Movies from './components/Movies';
import TVShows from './components/TVShows';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import News from './components/News';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <div className="app-container">
        <main>
          <NavigationBar />
          <Routes> 
            <Route path="/" element={<Home />} /> 
            <Route path="/movies" element={<Movies/>} />
            <Route path="/tv" element={<TVShows />} />
            <Route path="/topairing" element={<TopAiring />} />
            <Route path="/news" element={<News />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


