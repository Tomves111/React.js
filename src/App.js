import React, { Component } from 'react';
import Contact from './components/Contacts';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

class App extends Component {
  render() {

    return (
      <div className="App">
      <Header branding="Reservation System"/>
      <div className="container">
      <Contact 
      name="Gustav" 
      email="gus@gmail.com" 
      phone="645-645-4564" 
      />
      <Contact
      name="Gustav"
      email="gus@gmail.com"
      phone="6546-654-654"/>
      </div>
     </div>
    );
      }
  }

export default App;
