import React, { useEffect } from 'react';
import { auth } from './BaseConfig';
import { getAuth } from 'firebase/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import firebase from 'firebase/compat/app';

const SignIn = () => {
  useEffect(() => {
    const ui = firebaseui.auth.AuthUI.getInstance() ||  new firebaseui.auth.AuthUI(auth);

    ui.start("#firebaseui-auth-container", {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl){
          return true;
        },
        uiShown: function(){
          document.getElementById('loader').style.display = 'none';
        }
      },
      signInFlow: 'popup',
      signInSuccessUrl: 'http://localhost:5173/Dashboard',
      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        },
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
        },
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          recaptchaParameters: {
            type: 'image',
            size: 'normal',
            badge: 'bottomleft',
          }
        }
      ],
    })
  }, []);

  return (
    <div>
      <div id="firebaseui-auth-container"></div>
    </div>
  );
};

export default SignIn;