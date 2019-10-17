import React from 'react';
import './App.css';

import Home from  "./pages/Home";
import Rooms from  "./pages/Rooms";
import SingleRoom from  "./pages/SingleRoom";
import Error from  "./pages/Error";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import ContactUs from "./pages/ContactUs"
import Reservation from "./pages/Reservation"

import {Route, Switch} from "react-router-dom"
import {ProtectedRoute} from "./ProtectedRoute"

function App() {
  return(
  <> 
    <Navbar/>
    <Switch>
      <Route exact path="https://fathomless-depths-67432.herokuapp.com/" component={Home} />
      <Route exact path="https://fathomless-depths-67432.herokuapp.com/rooms" component={Rooms}/>
      <Route exact path="https://fathomless-depths-67432.herokuapp.com/rooms/:slug" component={SingleRoom}/>
      <Route exact path="https://fathomless-depths-67432.herokuapp.com/contactus" component={ContactUs} />
      <ProtectedRoute exact path="https://fathomless-depths-67432.herokuapp.com/reservation" component={Reservation}/>
      <Route component={Error}/>
    </Switch>
    <Footer/>
  </>
  );
}

export default App;
