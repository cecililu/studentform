import { Box, Stack, TextField, Typography } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
// import SelectUnstyled from '@mui/base/SelectUnstyled';
// import OptionUnstyled from '@mui/base/OptionUnstyled';


import React from 'react'

export const Personal = ({selectedDate, setselectedDate}) => {
  return (
  <Box  alignItems="center" minHeight="100vh"sx={{mx:10}}>
  <Typography align='left' variant="subtitle1" component="h2" sx={{my:1,fontWeight: 'bold',textDecoration: 'underline'}} >
    Personal Information
  </Typography>  
  <Stack direction='row' spacing={7} justifyContent='start' sx={{mb:2}}>
  
  <TextField sx ={{width:'45%' }} id="outlined-basic" label="First name" variant="outlined"  />
  <TextField sx={{width:'45%'}} id="outlined-basic" label="Middle name" variant="outlined"/>
  </Stack>
   
  <Stack direction='row' spacing={7} justifyContent='start' sx={{mb:2}}>
   <TextField  sx ={{width:'45%' }} id="outlined-basic" label="Last name" variant="outlined" />
   <DatePicker sx={{width:'100px' }} label='Bate of Birth' renderInput={(params)=><TextField {...params}/>}
  value={selectedDate} onChange={(newvalue)=> setselectedDate(newvalue)}/>
  </Stack>

  <Stack direction='row' spacing={7} justifyContent='start' sx={{mb:2}}>
  <TextField sx ={{width:'45%' }} id="outlined-basic" label="Native Language" variant="outlined"  />
  <TextField sx={{width:'45%'}} id="outlined-basic" label="Country of Birth" variant="outlined"/>
  </Stack>


  <Stack direction='row' spacing={7} justifyContent='start' sx={{mb:2}}>
   <TextField  sx ={{width:'45%' }} id="outlined-basic" label="Passport Number" variant="outlined" />
   <DatePicker sx={{width:'100px' }} label='Passport Expiry Date' renderInput={(params)=><TextField {...params}/>}
  value={selectedDate} onChange={(newvalue)=> setselectedDate(newvalue)}/>
  </Stack>

  <Stack direction='row' spacing={7} justifyContent='start' sx={{mb:2}}>
   <TextField  sx ={{width:'45%' }} id="outlined-basic" label="Maritial status" variant="outlined" />
    



  </Stack>

  </Box>
      )
}

