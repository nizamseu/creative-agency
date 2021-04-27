import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import service1 from '../../../images/icons/service1.png'
import service2 from '../../../images/icons/service2.png'
import service3 from '../../../images/icons/service3.png'
import './service.css'

const Service = () => {
    const [services,setServices]=useState([])

    useEffect(()=>{
        fetch('https://evening-shelf-01956.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
    },[])
    const service=[
        {   id:'01',
            title:'Web & Mobile design',
            description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nam non repellat blanditiis, cumque porro voluptas, similique ipsum neque eius fugiat veritatis hic libero dolor necessitatibus tenetur quisquam atque quod.',
            pic :service1
        },
        {   id:'02',
            title:'Graphics Design',
            description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nam non repellat blanditiis, cumque porro voluptas, similique ipsum neque eius fugiat veritatis hic libero dolor necessitatibus tenetur quisquam atque quod.',
            pic :service2
        },
        {   id:'03',
            title:'Web Development',
            description :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nam non repellat blanditiis, cumque porro voluptas, similique ipsum neque eius fugiat veritatis hic libero dolor necessitatibus tenetur quisquam atque quod.',
            pic :service3
        }
    ]
    
    return (
        <div className='row justify-content-center mb-5'>
           <h1 className='text-center'>Provide Awesome <span style={{color:'#7AB25A'}}> Services </span></h1>
            <div className='row d-flex justify-content-center mt-3 ml-3 '>
                {
                    services.map(item =><ServiceCard item={item}></ServiceCard>)
                }
            </div>
            
        </div>
    );
};

export default Service;