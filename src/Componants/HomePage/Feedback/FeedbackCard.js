import React from 'react';
import Card from '@material-ui/core/Card';
const FeedbackCard = ({item}) => {
    return (
        
        <div >
        <Card  className='m-2 p-2 '  
        style={{justifyItems:'center',textAlign:'center',width:'20rem',height:'18rem ',margin:'20px',padding:'20px'}}>
        
            <div className='d-flex align-items-center '>
                <img   style={{height:'70px',width:'70px',padding:'10px'}} src={item.photo} alt=""/>
                <div className='pl-2 text-left'>
                    <h5>{item.name}</h5>
                    <p> {item.company}</p>
                </div>
            </div>
       
        <p style={{textAlign:'left',paddingTop:'5px'}}> {item.description}</p>
     </Card>
   </div>
    );
};

export default FeedbackCard;