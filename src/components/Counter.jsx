import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[values,setname]=useState("0")
    
  return (
    <div>
      <Typography>The value is {values}</Typography>
      <Button></Button>
    </div>
  )
}

export default Counter
