import React, { useContext, useEffect, useState } from 'react';
import ServiceListCard from './ServiceListCard';
import './service.css'
import { userAuth } from '../../../App';
const ServiceList = () => {
    const [userInfo,setUserInfo]=useContext(userAuth)
    const [serviceList,setServiceList]=useState([])
    // const email='nizamcse.seu@gmail.com'
    const email=userInfo?.email
    console.log("mailll",email);
    useEffect(()=>{
        fetch(`https://evening-shelf-01956.herokuapp.com/servicelist/${email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setServiceList(data)
        })
    },[])

   
    return (
        <div style={{margin:'0 auto'}}>
            <h4>This is service list</h4>
         
                <div className=' row justify-content-center d-flex services'>
                {serviceList&& serviceList.map(item=><ServiceListCard item={item}></ServiceListCard>)}
                </div>

        </div>
    );
};

export default ServiceList;