import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { userAuth } from '../../../App';
import logo from '../../../images/logos/logo.png';
import firebase from "firebase/app";
import "firebase/auth";
const MenuBar = () => {
  const  [userInfo,setUserInfo]=useContext(userAuth);

  const handleLogOut=()=>{
    firebase.auth().signOut()
    .then(() => {
      const logOut={
        name:'',
        photo:'',
        email:'',
        islogged:false,
        error:'',
        success:false,
        isValid:''
      }
      setUserInfo(logOut)
      // sessionStorage.removeItem("token");
      sessionStorage.setItem('token', '');
      // setUserInfo(logOut)

    }).catch((error) => {
      // An error happened.
    });
  }

    return (
        <Navbar collapseOnSelect expand="lg" >
        <Navbar.Brand href="#home" > <img style={{height:'50px',top:'0'}}  src={logo} alt=""/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
          </Nav > */}
          <Nav className="ml-auto pr-5 ">
            <h4 className='d-flex align-items-center pr-3'>{userInfo?.name}</h4>
            <Nav.Link className='text-dark' href="/">Home</Nav.Link>
            <Nav.Link className='text-dark' href="#deets">Our Portfolio</Nav.Link>
            <Nav.Link className='text-dark' href="#deets">Our Team</Nav.Link>
            <Nav.Link className='text-dark' href="#deets">Contract Us</Nav.Link>
            <Nav.Link className='text-dark' href="/dashboard/orderList">Dashboard</Nav.Link>
           {userInfo.email ?<Button onClick={()=>handleLogOut()}  variant="dark" > LogOut</Button>
           :<Button variant="dark" href="/login"> LogIn</Button>
           }
           
           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default MenuBar;