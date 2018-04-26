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

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>'
};

class App extends Component {

  doLogin() {
	  ui.start('#firebaseui-auth-container', uiConfig);
  }
  render() {
    return (
      <div className="App">
        

      <h1>Welcome to My Awesome App</h1>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
      <button onClick={this.doLogin}>Login</button>

      </div>
    );
  }
}

export default App;
