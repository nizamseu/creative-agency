import { Card } from '@material-ui/core';
import React from 'react';
import './service.css'
const ServiceListCard = ({item}) => {
    return (
        <Card  style={{  justifyItems:'center',height:'16rem',width:'25rem',margin:'20px',padding:'10px'}}>
            <div className="justify-content-between servicesImage">
                <img  style={{ height:'70px',width:'70px',padding:'10px'}} src={`data:image/jpeg;base64,${item?.image} `}/>
                <h5 className='p-3'> Pending </h5>
            </div>
       
           <div className='serviceData' >
           <h5> {item?.title}</h5>
            <p style={{textAlign:'justify', padding:'5px'}}> {item?.projectDetails}</p>
           </div>
         </Card>
    );
};

export default ServiceListCard;