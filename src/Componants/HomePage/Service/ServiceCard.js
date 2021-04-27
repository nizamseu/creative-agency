import React from 'react';
import Card from '@material-ui/core/Card';
import './service.css'
import { Link } from 'react-router-dom';
const ServiceCard = ({item}) => {
    return (
      
               <Link to={`/dashboard/order/${item._id}`} className='cardHover'>
                    <Card   style={{ boxShadow:'none', justifyItems:'center',textAlign:'center',width:'18rem',margin:'20px',padding:'20px'}}>
                {/* <img   style={{height:'70px',width:'70px',padding:'10px'}} src={item.pic} alt=""/> */}
                <img  style={{height:'70px',width:'70px',padding:'10px'}} src={`data:image/jpeg;base64,${item?.image?.img} `}/>
                    <h5> {item.title}</h5>
                    <p style={{textAlign:'justify'}}> {item.description}</p>
                 </Card>
               </Link>
       
    );
};

export default ServiceCard;