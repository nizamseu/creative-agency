import React, { useContext, useEffect } from 'react';
import MenuBar from '../../SharePage/MenuBar/MenuBar';
import HomeFeture from '../HomeFeture/HomeFeture';
import '../Home/home.css'
import jwt_decode from "jwt-decode";
import { userAuth } from '../../../App';
const Header = () => {


  //   const [userInfo,setUserInfo]=useContext(userAuth);
  
  // const token = sessionStorage.getItem('token');

  // const decodedToken = jwt_decode(token);
  // const loggedIn={
  //   name:decodedToken.name,
  //    email:decodedToken.email,
  //    photo:decodedToken.picture,
  //    islogged:true,
  //   } 

  // useEffect(()=>{
  //     setUserInfo(loggedIn)
  // },[token])
    return (
        <div className='header'>
            <MenuBar></MenuBar>
            <HomeFeture></HomeFeture>
        </div>
    );
};

export default Header;