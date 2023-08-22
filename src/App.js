import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
//import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import WeatherApp from './WeatherApp';

class App extends React.Component {
  render(){
  return (
    <WeatherApp />
  );
  }
}
export default App;