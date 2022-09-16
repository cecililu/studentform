import React,{useState} from 'react'
import { Button, Container,  Typography } from '@mui/material';
 import { useFormik } from 'formik';
// import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Personal } from './Personal';
import { Addresss } from './address';
import { Parent } from './Parent';
export const Form = () => {
  

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
      
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });



  const [selectedDate, setselectedDate] = useState('')
  const [gender, setGender] = useState("")
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
     <Personal setselectedDate={setselectedDate}  selectedDate={selectedDate} gender={gender} setGender={setGender} formik={formik}/>
     <Addresss formik={formik}/>
     <Parent formik={formik}/>
     
      <Button sx={{margin:'auto'}} type='submit'>Submit now</Button>   
     </form>
  </Container>
  </div>
 
  </LocalizationProvider>
  )
}

 