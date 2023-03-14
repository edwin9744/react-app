import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
    var[fname,setname]=useState("Edwin")
    const ChangeName=()=>setname('Albert');
  return (
    <div>
      <Typography variant='h6'>Welcome {fname}</Typography>
      <Button variant='contained'color='primary' onClick={ChangeName}>Change Name</Button>
    </div>
  )
}

export default Statebasic
