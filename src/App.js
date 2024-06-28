import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
import About from './components/About';
// import Header from './components/Header';
// import BookingForm from './components/BookingForm';

function App() {
  return (
    <>
    <Nav />
    <Main />
    <Menu />
    <About />
    <Footer />
    {/* <Header /> */}
    {/* <BookingForm /> */}
    </>
  );
}

export default App;
