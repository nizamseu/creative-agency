import React from 'react';
import './footer.css';
import { useForm } from "react-hook-form";
const Footer = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='footermain'>
            <div className='row d-flex p-5 '>
                <div className="col-md-6 pl-5">
                        <h1 style={{fontWeight:'bold'}}>Let us Handle Your Project, Professionally.</h1>
                        <p className='pt-3'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, ipsam ipsum. Placeat sit officia sunt! </p>
                </div>
                <div className="col-md-6 ">

                        <form className='formInput' onSubmit={handleSubmit(onSubmit)}>
                        <input name="email" ref={register({ required: true })} placeholder='Your Email' /><br/>
                        {errors.email && <span>This field is required</span>}
                            <br/>
                        <input name="name" ref={register({ required: true })} placeholder='Your Name' /><br/>
                        {errors.name && <span>This field is required</span>}
                            <br/>
                        <textarea name="message" ref={register({ required: true })}  placeholder='Your Message' /><br/>
                        {errors.message && <span>This field is required</span>}
                            <br/>
                        <input className='btn-dark' type="submit" />
                        </form> 
                </div>
            </div>
        <p className='text-center pt-5 pb-5'>Copyright Baper Hotel.ltd {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;