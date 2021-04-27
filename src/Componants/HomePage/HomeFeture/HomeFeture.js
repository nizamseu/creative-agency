import React from 'react';
import { Button } from 'react-bootstrap';
import frame from '../../../images/logos/Frame.png';
import './homeFreture.css'
const HomeFeture = () => {
    return (
        <div className='row d-flex m-5 homeFreture'>
            <div className="col-md-6">
                <h1 className='fretureH1'>Lest's Grow Your <br/> Brand To The <br/> Next Level</h1>
               <br/>
               
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, veritatis excepturi. Nemo cumque consequuntur recusandae dolore consequatur dolorum explicabo nostrum ea, dolorem enim? Enim, eos. Placeat vero ullam ipsum! Iste. </p>
                <br/>
               <Button variant="dark" style={{padding:'10px 50px'}}> Hire Us</Button>
            </div>

            <div className="col-md-6">  
                <img style={{height:'400px'}} src={frame} alt=""/>
            </div>
        </div>
    );
};

export default HomeFeture;