import React, { Component } from 'react';
import './App.css';
import './CSS/footer.css';
import './CSS/header.css';
import './CSS/hero.css';
import './CSS/latest.css';
import './CSS/navigation.css';
import './CSS/popular.css';
import Header from './components/Header';
import Nav from './components/Navigation';
import Hero from './components/Hero';
import Popular from './components/Popular';
import Latest from './components/Latest';
import Footer from './components/Footer';

class App extends Component {


  render() {
    return (
      <div className="body">
        <Header />
        <Nav />
        <Hero />
        <Popular />
        <Latest />
        <Footer />
        
      </div>
    )
  }
}

export default App;
