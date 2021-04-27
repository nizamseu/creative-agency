import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './order.css'
const Oreder = () => {
    const { register, handleSubmit, watch, errors } = useForm();
  
   


    const onSubmit =(data,e) => {
        console.log("data",data)
        fetch('http://localhost:5000/order',{
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
    }

  
    return (
        <div className="orderMain">
            <h4 className='mt-2'>Order</h4>
            <div className="order mt-3 pl-5 pt-5 p-2">
                     <form  onSubmit={handleSubmit(onSubmit)}>
                        <input name="name"  ref={register({ required: true })} placeholder="Your name/Company's name" /><br/>
                        {errors.name && <span>This field is required</span>}
                            <br/>
                        <input name="email"  ref={register({ required: true })} placeholder='Your email' /><br/>
                        {errors.email && <span>This field is required</span>}
                            <br/>

                            <input name="title"  ref={register({ required: true })} placeholder="Project Title"  /><br/>
                        {errors.title && <span>This field is required</span>}
                            <br/>

                        <textarea name="projectDetails"  ref={register({ required: true })}  placeholder='Project Details' /><br/>
                        {errors.projectDetails && <span>This field is required</span>}
                            <br/>

                            <input name="price" type="number" ref={register({ required: true })} placeholder='Price' /><br/>
                        {errors.price && <span>This field is required</span>}
                            <br/>
                            {/* <input name="image" type="hidden" ref={register({ required: true })} defaultValue={service?.image?.img} /><br/>
                        {errors.price && <span>This field is required</span>} */}

                        <input name="actionType" type="hidden" ref={register({ required: true })} value='Pending' /><br/>
                        {errors.price && <span>This field is required</span>}
                       

                        <input  className='btn-dark' type="submit" />
                        </form> 
            </div>
           

        </div>
    );
};

export default Oreder;