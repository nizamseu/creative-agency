import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './login.css'
import { useHistory, useLocation } from 'react-router-dom';
import { userAuth } from '../../../App';
import jwt_decode from "jwt-decode";
import logo from '../../../images/logos/logo.png'



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }
const Login = () => {
    const  [userInfo,setUserInfo]=useContext(userAuth);
    const history= useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();


    // const token = sessionStorage.getItem('token');
    // const decodedToken = jwt_decode(token);
    // console.log("decode",decodedToken); 
    // const loggedIn={
    //     name:decodedToken.name,
    //      email:decodedToken.email,
    //      photo:decodedToken.picture,
    //      islogged:true,
    // } 
const handleWithGoogle=()=>{
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        console.log("logged",result);
    const {displayName,email,photoURL}=result.user;
   
     const logedIn={
         name:displayName,
         email:email,
         photo:photoURL,
         islogged:true,

     }
    setUserInfo(logedIn)
     storeAuthToken();

    })
    .catch((error) => {
      console.log(error);
    });
}


const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }


  

    return (
        <div className="login">
           
            <div>
                <img style={{height:'50px'}} src={logo} alt=""/>
            </div>

            <div className='loginArea text-center'>
                <h4 className='mt-5 mb-5'> Login With</h4>
                <button
                onClick={handleWithGoogle}
                className="btn btn-primary w-100">
                    Login With Google
                </button>
                <p className="mt-2">Dont't have account?  <a href="/login">Create an accout</a></p>
               
            </div>
           
        </div>
    );
};

export default Login;