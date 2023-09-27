import React from 'react'
// import Button from '@mui/material/Button';
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import VisibilityIcon from '@mui/icons-material/Visibility';

const Dars12 = () => {
  return (
    <div>
      <h1>UI kutubhona</h1>
      <button>Knopka</button>
      <Button variant='contained'>Knopka</Button>
      <Button variant='contained' href='https://google.com'>Link</Button>
      <br />
      <TextField id="outlined-basic" label="Outlined" variant="filled" />
      <VisibilityIcon fontSize="medium"/>
    </div>
  )
}

export default Dars12
