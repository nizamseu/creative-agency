import React, { useEffect, useState } from 'react';
import customer1 from'../../../images/customer-1.png';
import customer2 from'../../../images/customer-2.png';
import customer3 from'../../../images/customer-3.png';
import FeedbackCard from './FeedbackCard';

const Feedback = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/findReview')
        .then(res=>res.json())
        .then(data=>{
          setReviews(data)
        })
    },[])
    const feedback=[
        {
            name:'Angelina Jolie',
            position:'CEO',
            location:'Dhaka',
            description :' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ',
            pic :customer1
        },
        {
            name:'Elon Mask',
            position:'CEO',
            location:'SpaceX',
            description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ',
            pic :customer2
        },
        {
            name:'Stev Jobs',
            position:'CEO',
            location:'NewYork',
            description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus',
            pic :customer3
        }
    ]
    return (
        <div className='row justify-content-center mt-3 mb-5'>
        <h1 className='text-center pb-5'>Some of Our  Clients <span style={{color:'#7AB25A'}}> Feedback </span></h1>
         <div className='row d-flex justify-content-center  ml-3 '>
             {
                 reviews&&reviews.map(item =><FeedbackCard item={item}></FeedbackCard>)
             }
         </div>
         
     </div>
    );
};

export default Feedback;