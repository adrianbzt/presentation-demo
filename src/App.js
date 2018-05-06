import React, { Component } from 'react';

import firebase from 'firebase';
import Layout from './layout/default'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyC1u3X4GJ_Nn1cz1UvYPIDmacdY1yCGyNQ",
    authDomain: "presentation-demo-1d8ca.firebaseapp.com",
    databaseURL: "https://presentation-demo-1d8ca.firebaseio.com",
    projectId: "presentation-demo-1d8ca",
    storageBucket: "presentation-demo-1d8ca.appspot.com",
    messagingSenderId: "717871869946"
  };
  firebase.initializeApp(config);

  firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...

    if (errorCode === 'auth/operation-not-allowed') {
      alert('You must enable Anonymous auth in the Firebase Console.');
    } else {
      console.error(error);
    }
    
  });

class App extends Component {

  doLogin() {

  }
  render() {
    return (
      <div className="container-fluid">

      <Layout />

      </div>
    );
  }
}

export default App;
