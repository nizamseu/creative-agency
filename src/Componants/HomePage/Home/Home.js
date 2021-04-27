import React, { useContext, useEffect } from 'react';
import { userAuth } from '../../../App';
import MenuBar from '../../SharePage/MenuBar/MenuBar';
import BrandLogo from '../BrandLogo/BrandLogo';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeCarouselItem from '../HomeCarousel/HomeCarouselItem';
import HomeFeture from '../HomeFeture/HomeFeture';
import Service from '../Service/Service';
import jwt_decode from "jwt-decode";
import './home.css'

const Home = () => {
  //const [userInfo,setUserInfo]=useContext(userAuth);
  
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
        <div>
          <Header></Header>
          <BrandLogo></BrandLogo>
          <Service></Service>
          <HomeCarouselItem></HomeCarouselItem>
          <Feedback></Feedback>
          <Footer></Footer>

        </div>
    );
};

export default Home;