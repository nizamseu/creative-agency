import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";
import { userAuth } from '../../../App';
import PrivateRoute from '../../SharePage/Login/PrivateRoute';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';
import Oreder from '../Order/Oreder';
import Oreder2 from '../Order/Oreder2';
import OrderList from '../OrderList/OrderList';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';
import Sidebar from '../Sidebar/Sidebar';
import jwt_decode from "jwt-decode";
import logo from '../../../images/logos/logo.png'

const Dashboard = () => {
    const[userInfo,setUserInfo]=useContext(userAuth)


  const token = sessionStorage.getItem('token');
    const decodedToken = jwt_decode(token);
   
    const email= decodedToken.email;
    const loggedIn={
        name:decodedToken.name,
         email:decodedToken.email,
         photo:decodedToken.picture,
         islogged:true,
    } 

    useEffect(()=>{
        setUserInfo(loggedIn)
    },[token])

  

    return (
        <Router>
            <Switch>
        <div className='row'>
                <div className="col-md-2 pl-5">
                    
                    <div className='mt-3 mb-3'>
                        <img style={{height:'40px'}} src={logo} alt=""/>
                        {/* <h6>{userInfo?.name}</h6> */}
                    </div>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <h6 style={{float:'right',padding:'15px'}}>{userInfo?.name}</h6>
                    <Route path="/dashboard/addAdmin">
                            <AddAdmin></AddAdmin>
                    </Route>

                    <Route path="/dashboard/addService">
                            <AddService></AddService>
                    </Route>

                    <PrivateRoute path="/dashboard/serviceList">
                           <ServiceList></ServiceList>
                    </PrivateRoute>

                    <Route path="/dashboard/review">
                        <Review></Review>
                    </Route>


                    <Route path="/dashboard/order2">
                        <Oreder2></Oreder2>
                    </Route>


                    <Route path="/dashboard/order/:id">
                        <Oreder></Oreder>
                    </Route>

                    <Route path="/dashboard/orderList">
                        <OrderList></OrderList>
                    </Route>

                    
                </div>
        </div>
        </Switch>
    </Router>
    );
};

export default Dashboard;