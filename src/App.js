// App.js

import React from 'react';
import './App.css';
import Header from './Header';
import Features from './Features';
import Showcase from './Showcase';
import Contact from './Contact';
import Footer from './Footer';
import Introduction from './Introduction'; 
import Whyus from './Whyus'; 

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Introduction />
        <Whyus />
        <Features />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
