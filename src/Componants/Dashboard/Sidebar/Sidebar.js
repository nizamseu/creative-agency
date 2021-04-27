import React, { useContext, useEffect, useState } from 'react';
import { userAuth } from '../../../App';
import SidebarOption from '../SidebarOption/SidebarOption';

const Sidebar = () => {
    const[userInfo,setUserInfo]=useContext(userAuth);
    const [isAdmin,setIsAdmin]=useState(false);

    const email=userInfo.email;
    useEffect(()=>{
        fetch(`https://evening-shelf-01956.herokuapp.com/findAdmin/${email}`)
        .then(res=>res.json())
        .then(data=>{
            setIsAdmin(data)
            console.log("m",data);
        })
    },[email]) 
 
    return (
        <div>   
            {
                isAdmin?
                <div>
                <SidebarOption text="Service List" path='/dashboard/orderList' />
                <SidebarOption text="Add Service" path='/dashboard/addService' />
                <SidebarOption text="Add Admin" path='/dashboard/addAdmin'/>
                
                </div>
                :
                <div>
                <SidebarOption text="Service List" path='/dashboard/serviceList' />
                <SidebarOption text="Order" path='/dashboard/order2' />
                <SidebarOption text="Review" path='/dashboard/review' />
                </div>
            }
                

               
        </div>
    );
};

export default Sidebar;