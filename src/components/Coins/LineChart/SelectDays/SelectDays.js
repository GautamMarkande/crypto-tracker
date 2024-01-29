import  React  from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import '../SelectDays/SelectDays.css';
export default function SelectDays({Days,handleDaysChange,noP}) {
  return (
    
     <div className='selectMui'>
        {!noP&&<p>Price Change in</p>}
        <Select
        sx={{
            color:'var(--white) !important',
            height:'2.5rem',
            "& .MuiOutlinedInput-notchedOutline":{
                borderColor:'var(--white) !important'
            },
            "& .MuiSvgIcon-root":{
                color:"var(--white)"

            },
            "&:hover":{
                "&& fieldset":{
                    borderColor:'3a80e9'
                }
            },
            '& span':{
             color:"var(--white) !important"
            }
        }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Days}
          label="Days"
          onChange={handleDaysChange}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={10}>10 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={365}>1 Year</MenuItem>
        </Select>
        </div>
    
  );
}

