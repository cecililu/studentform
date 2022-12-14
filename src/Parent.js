import React from 'react'
import {  Box, InputLabel, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material"

import { FormControlLabel } from '@mui/material';


export const Parent = ({formik}) => {
  return (
    <Box  alignItems="center" minHeight="" sx={{width:'90%',margin:'auto'}}>
    <Typography align='left' variant="subtitle1" component="h4" sx={{my:5,fontWeight: 'bold',textDecoration: 'underline'}} >
      Parents/Guardians Details
    </Typography>  
   <Stack direction='row' columnGap={12} justifyContent='start' sx={{mb:2,}}>
    
      <Stack direction='column' alignItems="start" sx={{ width:'45%' }}> 
      <InputLabel htmlFor="father" >Father's Name</InputLabel>
      <TextField sx ={{ width:'100%' }} name='father' id="father" value={formik.values.father} variant="outlined"  onChange={formik.handleChange} />
      </Stack>
     
      
      <Stack direction='column' alignItems="start" sx={{width:'45%' }}> 
       <InputLabel>Father's occupation</InputLabel>
      <TextField sx={{width:'100%'}} name='fatherOccupation' id="fatherOccupation"  variant="outlined" value={formik.values.fatherOccupation}  onChange={formik.handleChange}/>
      </Stack>
     </Stack>
      <Stack direction='row' columnGap={12} justifyContent='start' sx={{mb:2,}}>
    
        <Stack direction='column' alignItems="start" sx={{ width:'45%' }}> 
        <InputLabel htmlFor="mother" >Mother's Name</InputLabel>
        <TextField sx ={{ width:'100%' }} name='mother' id="mother" value={formik.values.mother} variant="outlined"  onChange={formik.handleChange} />
        </Stack>


        <Stack direction='column' alignItems="start" sx={{width:'45%' }}> 
        <InputLabel>Mother's occupation</InputLabel>
        <TextField sx={{width:'100%'}} name='motherOccupation' id="motherOccupation"  variant="outlined" value={formik.values.motherOccupation}  onChange={formik.handleChange}/>
        </Stack>
        </Stack>

        <Stack direction='column' columnGap={12}  sx={{mb:2,}}>
       
        <RadioGroup
       
            name="emergencyparent" id="emergencyparent"
            value={formik.Emergencyparent}
            onChange={formik.handleChange} >
            <Stack direction='row' columnGap={12} justifyContent='start' sx={{mb:2,}}>  
            <Stack direction="column" justifyContent="start" >
            <InputLabel border={1}>Emergency Contact Parent</InputLabel>
            <FormControlLabel value="Father" control={<Radio />} label="Father" />
            <FormControlLabel value="Mother" control={<Radio />} label="Mother" />
            </Stack>
            </Stack>
         </RadioGroup>
         </Stack>   

        <Stack direction='row' columnGap={12} justifyContent='start' sx={{mb:2,}}>
    
        <Stack direction='column' alignItems="start" sx={{ width:'45%' }}> 
        <InputLabel htmlFor="emergecnyContactEmail" >Emergency Contact email</InputLabel>
        <TextField sx ={{ width:'100%' }} name='emergencyContactEmail' id="emergencyContactEmail" value={formik.values.emergencyContactEmail} variant="outlined"  onChange={formik.handleChange} />
        </Stack>


        <Stack direction='column' alignItems="start" sx={{width:'45%' }}> 
        <InputLabel>Emergency Contact Number</InputLabel>
        <TextField sx={{width:'100%'}} name='emergencyPhone' id="emergencyPhone"  variant="outlined" value={formik.values.emergencyPhone}  onChange={formik.handleChange}/>
        </Stack>
        </Stack>
   </Box>
  )
}
