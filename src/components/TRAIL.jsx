import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const TRAIL = () => {
    var [pagename,setname]=useState("home page");
   
    const gallarypage= () =>{
    setname("Gallary page")
    }
    const contactn = ()=>{
        setname("contact name")
    }
    const homepage =()=>{
        setname("home page")
    }
  return (
    <div>
      <Button variant='contained' color='primary' onClick={homepage}>Home</Button>
      <Button variant='contained' color='success' onClick={gallarypage}>Gallary page</Button>
      <Button variant='contained'color='error' onClick={contactn}>contact page</Button>
      <Typography>Welcome to {pagename}</Typography>
    </div>
  )
}

export default TRAIL
