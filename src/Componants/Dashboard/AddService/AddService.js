import React, { useState } from 'react';
import './addService.css'
const AddService = () => {
 

    const [info,setInfo]=useState({});
    const [file,setFile]=useState(null)
    const [status,setStatus]=useState('')

    const handleBlur = e =>{
        const newInfo={...info};
         newInfo[e.target.name]=e.target.value;
        setInfo(newInfo)
    }

    const handleChange = e =>{

        const newFile =e.target.files[0];
        setFile(newFile)
    }

    const handleSubmit=(e)=>{
        const formData = new FormData()
               formData.append('file', file);
               formData.append('title', info.title)
               formData.append('description', info.description)
       console.log("agee",file,info.description,info.title);

               fetch('https://evening-shelf-01956.herokuapp.com/addservice', {
                   method: 'POST',
                   body: formData
               })
               .then(res => res.json())
               .then(data => {
                   console.log("Datat",data);
                    setStatus(data)
               })
               .catch(error => {
                   console.error(error)
               })
       e.preventDefault();
       e.target.reset();
       }

       console.log("status",status);
    return (
        <div className='mt-3'>
            <h4>Add Service </h4>
            {/* <form  onSubmit={e=>handleSubmit(onSubmit)}>
                        <input name="title" ref={register({ required: true })} placeholder="Enter Title" /><br/>
                        {errors.title && <span>This field is required</span>}
                            <br/>
                        <input name="description" ref={register({ required: true })} placeholder='Description' /><br/>
                        {errors.description && <span>This field is required</span>}
                            

                            <input name="description" id='file' type='file' ref={register({ required: true })} placeholder='Description' /><br/>
                         {errors.description && <span>This field is required</span>}
                            <label for='file'> Choose File</label>
                            <br/>
                        <input className='btn-dark' type="submit" />
                        </form>  */}

        <div className='addService mt-3'>
            <div  className='addServiceArea'>
                <form onSubmit={handleSubmit} >
                        <label >Email</label><br/>
                        <input onBlur={handleBlur} type="text" name="title"  placeholder="Service Title"/><br/>
                        <label >Name</label><br/>
                        <input onBlur={handleBlur} type="text" name="description" placeholder="Description" /><br/>
                        <label >Upload Your File</label><br/>
                        <input onChange={handleChange} type="file" name="file" placeholder="Upload Your File" /><br/><br/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
       <div style={{width:'250px'}} className='text-left'>
       {
          <p className='text-center' style={{color:'green'}}>{status.message}</p>}
        {
            status && setTimeout(()=>{
                setStatus(false)
            },1000)
        }
       </div>
                       
        </div>
    );
};

export default AddService;