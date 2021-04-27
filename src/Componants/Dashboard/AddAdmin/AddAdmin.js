import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import './addAdmin.css'
const AddAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit =(data,e) => {
        console.log("data",data)
        fetch('https://evening-shelf-01956.herokuapp.com/addAdmin',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log("result",result);
        })
        e.preventDefault();
        e.target.reset();
    }

    return (
        <div>
            <h1>Admin</h1>
           <div className='admin'>
                <div className='adminSection'>
                     <form  onSubmit={handleSubmit(onSubmit)}>
                           <span>Email</span> <br/>
                            <input name="email"  ref={register({ required: true })} placeholder='Enter Email Address' /><br/>
                            {errors.email && <span>This field is required</span>}
                                
                            
                            <br/>
                            <input  className='btn-dark' type="submit" />
                </form> 
                </div>
           </div>
        </div>
    );
};

export default AddAdmin;