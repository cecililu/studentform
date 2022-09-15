import { Stack, TextField } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers"


import React from 'react'

export const Personal = ({selectedDate, setselectedDate}) => {
  return (
    <Stack spacing={4} sx={{ width:"100%"}} >
  <TextField id="outlined-basic" label="First name" variant="outlined"  />
  <TextField  id="outlined-basic" label="Middle name" variant="outlined"/>
  

  <TextField id="outlined-basic" label="Last name" variant="outlined" />

  <DatePicker label='Pick' renderInput={(params)=><TextField {...params}/>}
  value={selectedDate} onChange={(newvalue)=> setselectedDate(newvalue)}
  />

  </Stack>
      )
}

