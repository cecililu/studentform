import {  Box, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import React from 'react'

export const Addresss = ({formik}) => {
  return (
    <Box  alignItems="center" minHeight="" sx={{width:'90%',margin:'auto'}}>
    <Typography align='left' variant="subtitle1" component="h4" sx={{my:5,fontWeight: 'bold',textDecoration: 'underline'}} >
      Address Detail
    </Typography>  
   <Stack direction='row' columnGap={12} justifyContent='start' sx={{mb:2,}}>
    
      <Stack direction='column' alignItems="start" sx={{ width:'45%' }}> 
      <InputLabel htmlFor="address" >Address</InputLabel>
      <TextField sx ={{ width:'100%' }} name='address' id="address" value={formik.values.FirstName} variant="outlined"  onChange={formik.handleChange} />
      </Stack>
     
      
      <Stack direction='column' alignItems="start" sx={{width:'45%' }}> 
      <InputLabel>City/town</InputLabel>
      <TextField sx={{width:'100%'}} name='city' id="city"  variant="outlined" value={formik.values.city}  onChange={formik.handleChange}/>
      </Stack>
  </Stack>


  <Stack direction='row' columnGap={12} justifyContent='start' sx={{mb:2}}> 
       

       <Stack direction='column' alignItems="start" sx={{ width:'45%' }}>  
            <InputLabel htmlFor="residingcountry">Country</InputLabel> 
            <Select displayEmpty value={formik.values.residingcountry} sx ={{width:'100%'}} id='residingcountry' name='residingcountry' onChange={formik.handleChange}>
              
              <MenuItem value ='' disabled >{formik.values.residingcountry ||"Select Country"}</MenuItem>
              <MenuItem value={'Nepal'}>Nepal</MenuItem>
              <MenuItem value={"india"}>India</MenuItem>
              <MenuItem value={"others"}>Other</MenuItem>
            </Select>
        </Stack>

        <Stack direction='column' alignItems="start" sx={{ width:'45%' }}>  
            <InputLabel htmlFor="province">Province</InputLabel> 
            <Select displayEmpty value={formik.values.province} sx ={{width:'100%'}} id='province' name='province' onChange={formik.handleChange}>
              
              <MenuItem value ='' disabled >{formik.values.province ||"Select province"}</MenuItem>
              <MenuItem value={'Bagmati'}>Bagmati</MenuItem>
              <MenuItem value={"Gandaki"}>Gandaki</MenuItem>
              <MenuItem value={"others"}>Other</MenuItem>
            </Select>
        </Stack>
  </Stack>

  <Stack direction='row' columnGap={12} justifyContent='start' sx={{mb:2,}}>
  
  <Stack direction='column' alignItems="start" sx={{ width:'45%' }}> 
  <InputLabel>Postal Code</InputLabel>
  <TextField sx ={{ width:'100%' }} name='Postal Code' id="Postal Code" value={formik.values.FirstName} variant="outlined"  onChange={formik.handleChange} />
  </Stack>
 
  
  <Stack direction='column' alignItems="start" sx={{width:'45%' }}> 
  <InputLabel>Email</InputLabel>
  <TextField sx={{width:'100%'}} name='email' id="email"  variant="outlined" value={formik.values.email}  onChange={formik.handleChange}/>
  </Stack>
</Stack>
  </Box>
  )
}
