import React, { useContext } from 'react';
import { userAuth } from '../../../App';
import { useForm } from 'react-hook-form';
import './review.css' 

const Review = () => {    
    const[userInfo,setUserInfo]=useContext(userAuth)
    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const onSubmit = (data,e) => {
      console.log(data);
      fetch('https://evening-shelf-01956.herokuapp.com/addreview',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=>{
        console.log(result);
    })
    e.preventDefault();
    e.target.reset();
    };
  
    return (
        <div className='review'> 
            <h4>Review</h4>
            <div className="reviewArea  pt-5 pl-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <input name="name" ref={register({ required: true })} placeholder="Your Name" defaultValue={userInfo?.name} />
                    {errors.name && 'Name is required.'}
                <br/> <br/>
                    <input name="company" ref={register({ required: true })} placeholder="Company's Name, Designation" />
                    {errors.company && 'company is required.'}
                    <br/> <br/>
                    <textarea name="description" ref={register({ required: true })} placeholder="Description" />
                    {errors.description && 'description is required.'}
                    <br/> <br/>

                    <input ref={register({ required: true })}  type='hidden' value={userInfo?.photo} name="photo"  />
                    <input ref={register({ required: true })}  type='hidden' value={userInfo?.email} name="email"  />

                    <input type="submit" />
                </form>
            </div>
            
                
        </div>
    );
};

export default Review;