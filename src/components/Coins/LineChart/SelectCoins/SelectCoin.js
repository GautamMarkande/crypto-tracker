import  React  from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import '../SelectDays/SelectDays.css';
export default function SelectCoin({Allcoins,handleChangeCrypto,Crypto1,Crypto2}) {
  return (
    <div className="selectCoinContainer">
        <div className='selectMui'>
        <p>Crypto 1</p>
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
          value={Crypto1}
          label="Crypto 1"
          onChange={(event)=>handleChangeCrypto(event,true)}
        >
            {
                Allcoins?.filter((crypto)=>crypto.id!==Crypto2).map((coin)=>(
                  <MenuItem value={coin.id}>{coin.name}</MenuItem>
                ))
            }
        </Select>
        </div>
        <div className='selectMui'>
        <p>Crypto 2</p>
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
          value={Crypto2}
          label="Crypto 2"
          onChange={(event)=>handleChangeCrypto(event,false)}
        >
            {
                Allcoins?.filter((crypto)=>crypto.id!==Crypto1).map((coin)=>(
                  <MenuItem value={coin.id}>{coin.name}</MenuItem>
                ))
            }
        </Select>
        </div>
    
    </div>
  );
}

