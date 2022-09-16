import React from 'react'
import { Button, Container,  Typography } from '@mui/material';
 import { useFormik } from 'formik';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Personal } from './Personal';
import { Addresss } from './address';
import { Parent } from './Parent';
import { Stack } from '@mui/system';
import * as yup from 'yup';
export const Form = () => {
  let schema = yup.object().shape({
    firstname: yup.string().required(),
      middlename: yup.string().required(),
      lastname: yup.string().required(),
      dob:yup.string(),
      language:yup.string().required(),
      countryofbirth:yup.string().required(),
      passportNumber:yup.number().required(),
      passportExpiry:yup.string(),
      maritialStatus:yup.string().required(),
      gender:yup.string().required(),
      address:yup.string().required(),
      city:yup.string().required(),
      province:yup.string().required(),
      residingcountry:yup.string().required(),
      email:yup.string().required().email(),
      father:yup.string().required(),
      fatherOccupation:yup.string().required(),
      mother:yup.string().required(),
      motherOccupation:yup.string().required(),
      emergencyContactEmail: yup.string().required(),
      emergencyPhone: yup.number().required(),
      
    })

  const formik = useFormik({
    initialValues: {
      firstname: '',
      middlename: '',
      lastname: '',
      dob:'',
      language:'',
      countryofbirth:'',
      passportNumber:'',
      passportExpiry:'',
      maritialStatus:'',
      gender:'',
      address:'',
      city:"",
      province:'',
      residingcountry:'',
      father:'',
      fatherOccupation:'',
      mother:'',
      motherOccupation:'',
      emergencyContactEmail:'',
      emergencyPhone:'',
      emergencyparent:'',
      
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema:schema
  });

  
  return (

    <LocalizationProvider dateAdapter={AdapterDateFns}>
  
    <div> 
        <div>

        <Typography align='center' variant="h6" component="h2" sx={{mt: 2}}>
        Student Profile
        </Typography>

                <Typography align='center' variant="subtitle2" component="h2" sx={{color: "#5B5B5B", my:2}}>
                Please enter the information accurately and correctly. The information<br/>
            stored here will be submitted to the university you select.
        </Typography>
      </div>

  <Container  sx={{mt:4,mx:1,margin:'auto'}}>
    <form onSubmit={formik.handleSubmit}>
     <Personal formik={formik}/>
     <Addresss formik={formik}/>
     <Parent formik={formik}/>

      <Stack direction='row' justifyContent='start' sx={{width:'90%',margin:'auto'}}>
        <Button sx={{my:4,background:'orange'}}  variant="contained" type='submit'>Submit now</Button>   
      </Stack>
      
     </form>
  </Container>
  </div>
 
  </LocalizationProvider>
  )
}

 