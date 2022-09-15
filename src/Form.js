import React,{useState} from 'react'
import { Container,  Typography } from '@mui/material';

// import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Personal } from './Personal';
export const Form = () => {
  const [selectedDate, setselectedDate] = useState()
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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

  <Container  sx={{mt:4,mx:1}}>
  
     <Personal setselectedDate={setselectedDate}  selectedDate={selectedDate}/>

  </Container>
  </div>
  
  </LocalizationProvider>
  )
}

 