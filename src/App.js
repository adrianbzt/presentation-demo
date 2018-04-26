import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from 'firebase';
import firebaseui from 'firebaseui';



  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBK4Z-4SivhPTPmfEeOASMVYG0K3p073mU",
    authDomain: "presentation-demo-9ef83.firebaseapp.com",
    databaseURL: "https://presentation-demo-9ef83.firebaseio.com",
    projectId: "presentation-demo-9ef83",
    storageBucket: "presentation-demo-9ef83.appspot.com",
    messagingSenderId: "821628220371"
  };
  firebase.initializeApp(config);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());  

class App extends Component {

  doLogin() {
	  ui.start('#firebaseui-auth-container', {
		  signInOptions: [
			  firebase.auth.EmailAuthProvider.PROVIDER_ID,
			  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			  firebase.auth.PhoneAuthProvider.PROVIDER_ID
		  ],
	  });
  }
  render() {
    return (
      <div className="App">
        

      <h1>Welcome to My Awesome App</h1>
      <div id="firebaseui-auth-container"></div>
      <button onClick={this.doLogin}>Login</button>

      </div>
    );
  }
}

export default App;
