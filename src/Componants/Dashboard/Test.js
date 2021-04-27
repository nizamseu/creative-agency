import { FormControl, FormHelperText, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
const Test = ({actionId,handleClose,setIsUpdate}) => {
    const history= useHistory()
    const [actionValue, setActionValue] = useState('');
    const classes = useStyles();
    const handleChange = (event) => {
      event.preventDefault()
      setActionValue(event.target.value);
      handleClose()
      
    };
    
    useEffect(()=>{
      fetch(`https://evening-shelf-01956.herokuapp.com/action`,{
      method:'PATCH',
      headers:{'content-type':'application/json'},
      body:JSON.stringify({id:actionId,actionValue:actionValue})
    })
    .then(res=>res.json())
    .then(success=>{
      success&& history.go('/')
    })
    },[actionValue])

    
    return (
        <div>
             <FormControl >
        <Select
          value={actionValue}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">
            <em>Pending</em>
          </MenuItem>
          <MenuItem value={'Pending'}>Pending</MenuItem>
          <MenuItem value={'Approved'}>Approved</MenuItem>
          <MenuItem value={'Cancel'}>Cancel</MenuItem>
        </Select>
      </FormControl>
        </div>
    );
};

export default Test;