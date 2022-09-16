import { autocompleteClasses, Box, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
// import SelectUnstyled from '@mui/base/SelectUnstyled';
// import OptionUnstyled from '@mui/base/OptionUnstyled';


import React from 'react'


export const Personal = ({selectedDate, setselectedDate,gender,setGender}) => {
  


  return (
  <Box  alignItems="center" minHeight="100vh" sx={{width:'90%',margin:'auto'}}>
  <Typography align='left' variant="subtitle1" component="h2" sx={{my:1,fontWeight: 'bold',textDecoration: 'underline'}} >
    Personal Information
  </Typography>  
 <Stack direction='row' columnGap={15} justifyContent='start' sx={{mb:2,}}>
  
    <Stack direction='column' alignItems="start" sx={{ width:'45%' }}> 
    <InputLabel>First Name</InputLabel>
    <TextField sx ={{ width:'100%' }} name='first-name' id="outlined-basic"  variant="outlined"  />
    </Stack>
   
    
    <Stack direction='column' alignItems="start" sx={{width:'45%' }}> 
    <InputLabel>Middle Name</InputLabel>
    <TextField sx={{width:'100%'}} name='middle-name' id="outlined-basic"  variant="outlined"/>
    </Stack>
</Stack>
   
  <Stack direction='row' columnGap={15} justifyContent='start' sx={{mb:2,}}> 

        <Stack direction='column' alignItems="start" sx={{ width:'45%' }}> 
        <InputLabel htmlFor="last-name">Last Name</InputLabel>
        <TextField  sx ={{width:'100%' }} name='last-name' id="outlined-basic"  variant="outlined" />
        </Stack>

        <Stack direction='column' alignItems="start" sx={{ width:'45%' }}> 
            <InputLabel htmlFor="dob"> Date of Birth</InputLabel>
            <DatePicker id='dob' sx={{width:'100%' }}  renderInput={(params)=><TextField {...params} sx={{width: '100%'}}/>}
            value={selectedDate} onChange={(newvalue)=> setselectedDate(newvalue)}/>
       </Stack>
  </Stack>

  <Stack direction='row' columnGap={15} justifyContent='start' sx={{mb:2}}>
     
     
    <Stack direction='column' alignItems="start" sx={{ width:'45%' }}> 
        <InputLabel> Date of Birth</InputLabel>
        <TextField sx ={{width:'100%' }} id="outlined-basic" label="Native Language" variant="outlined"  />
    </Stack>
     
    <Stack direction='column' alignItems="start" sx={{ width:'45%' }}> 
        <InputLabel htmlFor="country"> Country Of Birth</InputLabel> 
        <TextField sx={{width:'100%'}} id="outlined-basic" name='country' variant="outlined"/>
    </Stack>
  </Stack>


  <Stack direction='row' columnGap={15} justifyContent='start' sx={{mb:2,}}> 
       <Stack direction='column' alignItems="start" sx={{ width:'45%' }}> 
            <InputLabel htmlFor="pass"> Passport Number</InputLabel> 
           <TextField  sx ={{width:'100%' }} name='pass' id="outlined-basic"  variant="outlined" />
       </Stack>

       <Stack direction='column' alignItems="start" sx={{ width:'45%' }}>  
            <InputLabel htmlFor="pass-exp"> Country Of Birth</InputLabel> 
            <DatePicker name='pass-exp' sx={{width:'100px' }}   renderInput={(params)=><TextField {...params} sx={{width: '100%'}}/>}
            value={selectedDate} onChange={(newvalue)=> setselectedDate(newvalue)}/>
        </Stack>
  </Stack>


  <Stack direction='row' columnGap={15} justifyContent='start' sx={{mb:2}}> 
       <Stack direction='column' alignItems="start" sx={{ width:'45%' }}> 
            <InputLabel htmlFor="maritial-status"> Maritial Status</InputLabel> 
           <TextField  sx ={{width:'100%' }} name='maritial-status' id="outlined-basic"  variant="outlined" />
       </Stack>

       <Stack direction='column' alignItems="start" sx={{ width:'45%' }}>  
            <InputLabel htmlFor="pass-exp">Gender</InputLabel> 
            <Select displayEmpty value={gender} sx ={{width:'100%'}}
            onChange={(e)=>{
             console.log( e.target.value)
             setGender(e.target.value)
            }}>
              <MenuItem value ='' disabled>Gender</MenuItem>
              <MenuItem value={'male'}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"others"}>Other</MenuItem>
            </Select>
        </Stack>
  </Stack>



  </Box>
      )
}

