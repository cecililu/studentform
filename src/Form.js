import React from 'react'
import { Container, TextField, Typography } from '@mui/material';
export const Form = () => {
  return (
    <div> 
        <div>
        <Typography align='center' variant="h6" component="h2" sx={{mt: 2}}>
        Student Profile
        </Typography>

                <Typography align='center' variant="subtitle2" component="h2" sx={{color: "#5B5B5B",my:2}}>
                Please enter the information accurately and correctly. The information<br/>
            stored here will be submitted to the university you select.
        </Typography>
      </div>

  <Container  sx={{mt:4}}>
   <Typography align='left' variant="subtitle1" component="h2" sx={{m: 2,mx:6}} >
       Personal Information
    </Typography>
  <TextField id="outlined-basic" label="First name" variant="outlined"  sx={{ width: '45%',mx:2,my:1.5}}/>
  <TextField id="outlined-basic" label="Middle name" variant="outlined" sx={{ width: '45%', mx:2,my:1.5}}/>
   

  <TextField id="outlined-basic" label="Last name" variant="outlined"  sx={{ width: '45%',mx:2,my:1.5}}/>
  <TextField id="outlined-basic" label="Middle name" variant="outlined" sx={{ width: '45%', mx:2,my:1.5 }}/>

  </Container>
  </div>
  

  )
}

 