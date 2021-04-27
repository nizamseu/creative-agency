import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Test from '../Test'
import './order.css'
const OrderList = () => {
    
    const [orderDatas,setOrderDatas]=useState([])
    const [open, setOpen] = useState(false);
    const [actionId,setActionId]=useState('')
    const [isUpdate,setIsUpdate]=useState(false)


    const handleClickOpen = (id) => {
        setActionId(id)
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    useEffect(()=>{
        fetch('https://evening-shelf-01956.herokuapp.com/orderList')
        .then(res=>res.json())
        .then(data=>{
            setOrderDatas(data)
            console.log(data);
        })
    },[])

  
    return (
        <div className="mt-3">
                <h4 >Order List</h4>

        <Table responsive  className="table table-borderless">
      <thead>
        <tr >
          <th>#</th>
          <th width='15%'>Name</th>
          <th  width='15%'>Email</th>
          <th  width='15%'>Services</th>
          <th  width='35%'>Project Details</th>
          <th  width='15%'>Action</th>
        </tr>
      </thead>
      <tbody>
        {orderDatas &&
          orderDatas.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.title}</td>
              <td>{item.projectDetails}</td>
              <td  className='d-flex'>
              <div>
                        {item.actionType==='Cancel' && 
                        <Typography className='orderList' style={{background:'#FF7676'}}
                        >{item.actionType}</Typography>}
                        
                        {item.actionType==='Approved' && 
                        <Typography className='orderList' style={{background:'#38AF86'}}>{item.actionType}</Typography>}
                       
                        {item.actionType==='Pending' && 
                        <Typography className='orderList' style={{background:'#76C5FF'}}>{item.actionType}</Typography>}
                        </div>


                        <div className='d-flex justify-content-center'>
                            <IconButton 
                                onClick={()=>handleClickOpen(item._id)}
                            color="primary"  component="span">
                                <EditIcon />
                            </IconButton>
                        </div>
                        
              </td>
            </tr>
          ))}
      </tbody>
    </Table>

    <Dialog
       open={open}
       onClose={handleClose}
      >
    <DialogTitle>Action Type <br/></DialogTitle>
    <DialogContent>
     <Test actionId={actionId} handleClose={handleClose} setIsUpdate={setIsUpdate}></Test>
    </DialogContent>
    
       <DialogActions>
           
       <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        {/* <Button onClick={handleClose} color="primary" autoFocus>
            Submit
        </Button> */}
       </DialogActions>
      </Dialog>


        </div>
    );
};

export default OrderList;