import React from 'react';
import {AppContext, AppProvider } from "./AppContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Container from "./Container";
import './App.css';

function App() {
  return (
    <AppProvider>
      <Nav />
      <Container />
      <Footer />
    </AppProvider>
    
   
  );
}

export default App;
