import {  Box, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"
// import SelectUnstyled from '@mui/base/SelectUnstyled';
// import OptionUnstyled from '@mui/base/OptionUnstyled';


import React from 'react'


export const Personal = ({selectedDate, setselectedDate,gender,setGender,formik}) => {
  
 console.log(formik.values)

  return (
  <Box  alignItems="center" minHeight="" sx={{width:'90%',margin:'auto'}}>
  <Typography align='left' variant="subtitle1" component="h4" sx={{my:5,fontWeight: 'bold',textDecoration: 'underline'}} >
    Personal Information
  </Typography>  
 <Stack direction='row' columnGap={12} justifyContent='start' sx={{mb:2,}}>
  
    <Stack direction='column' alignItems="start" sx={{ width:'45%' }}> 
    <InputLabel>First Name</InputLabel>
    <TextField sx ={{ width:'100%' }} name='firstname' id="firstname" value={formik.values.FirstName} variant="outlined"  onChange={formik.handleChange} />
    </Stack>
   
    
    <Stack direction='column' alignItems="start" sx={{width:'45%' }}> 
    <InputLabel>Middle Name</InputLabel>
    <TextField sx={{width:'100%'}} name='middlename' id="middlename"  variant="outlined" value={formik.values.middlename}  onChange={formik.handleChange}/>
    </Stack>
</Stack>
   
  <Stack direction='row' columnGap={12} justifyContent='start' sx={{mb:2,}}> 

        <Stack direction='column' alignItems="start" sx={{ width:'45%' }}> 
        <InputLabel htmlFor="lastname">Last Name</InputLabel>
        <TextField  sx ={{width:'100%' }} name='lastname' id="lastname"  variant="outlined"  value={formik.values.lastname}  onChange={formik.handleChange}/>
        </Stack>

        <Stack direction='column' alignItems="start" sx={{ width:'45%' }}> 
            <InputLabel htmlFor="dob"> Date of Birth</InputLabel>
            <DatePicker id='dob' sx={{width:'100%' }} name='dob' renderInput={(params)=><TextField {...params} sx={{width: '100%'}}/>}
            value={formik.values.dob} onChange={formik.handleChange}/>
       </Stack>
  </Stack>

  <Stack direction='row' columnGap={12} justifyContent='start' sx={{mb:2}}>
     
     
      <Stack direction='column' alignItems="start" sx={{ width:'45%' }}> 
          <InputLabel htmlFor="language"> Native Language</InputLabel>
          <TextField sx ={{width:'100%' }} id="language" label="Native Language" value={formik.values.language} variant="outlined" onChange={formik.handleChange}  />
      </Stack>
     
    <Stack direction='column' alignItems="start" sx={{ width:'45%' }}> 
        <InputLabel htmlFor="countryofbirth"> Country Of Birth</InputLabel> 
        <TextField sx={{width:'100%'}} id="countryofbirth" name='countryofbirth' variant="outlined" value={formik.values.countryofbirth}  onChange={formik.handleChange} />
    </Stack>
  </Stack>


  <Stack direction='row' columnGap={12} justifyContent='start' sx={{mb:2,}}> 
       <Stack direction='column' alignItems="start" sx={{ width:'45%' }}> 
            <InputLabel htmlFor="pass"> Passport Number</InputLabel> 
           <TextField  sx ={{width:'100%' }}  id="passportNumber"  name="passportNumber" variant="outlined" value={formik.values.passportNumber}  onChange={formik.handleChange} />
       </Stack>

       <Stack direction='column' alignItems="start" sx={{ width:'45%' }}>  
            <InputLabel htmlFor="passportExpiry"> Passport Expiry Date</InputLabel> 
            <DatePicker name='passportExpiry' id='passportExpiry' sx={{width:'100px' }}   renderInput={(params)=><TextField {...params} sx={{width: '100%'}}/>}
            value={formik.values.passportExpiry}  onChange={formik.handleChange} />
        </Stack>
  </Stack>


  <Stack direction='row' columnGap={12} justifyContent='start' sx={{mb:2}}> 
       <Stack direction='column' alignItems="start" sx={{ width:'45%' }}> 
            <InputLabel htmlFor="maritialStatus"> Maritial Status</InputLabel> 
           <TextField  sx ={{width:'100%' }} name='maritialStatus' id="maritialStatus"  value={formik.values.maritialStatus} />
       </Stack>

       <Stack direction='column' alignItems="start" sx={{ width:'45%' }}>  
            <InputLabel htmlFor="pass-exp">Gender</InputLabel> 
            <Select displayEmpty value={formik.values.gender} sx ={{width:'100%'}} id='gender' name='gender' onChange={formik.handleChange}>
              
              <MenuItem value ='' disabled >{formik.values.gender ||"GENDER"}</MenuItem>
              <MenuItem value={'male'}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"others"}>Other</MenuItem>
            </Select>
        </Stack>
  </Stack>



  </Box>
      )
}

