import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <input placeholder='username'></input><br></br>
      <input type={'password'} placeholder='password'></input><br></br>

      <TextField placeholder='username' label variant='standard'></TextField><br></br>
      <TextField type={'password'} placeholder='password' label variant='filled'></TextField><br></br>
      <Button  variant='contained' color='secondary'>login</Button>
      
    </div>
  )
}

export default Login
