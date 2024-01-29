import React,{useState} from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
export default function PaginationControlled({totNumOfpages,handleChange,page}) {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Typography>Page: {page}</Typography>
      <Pagination count={totNumOfpages} page={page} onChange={(event,value)=>handleChange(event,value)} color="primary"
      sx={{
        color:'var(--white) !important',
        '& .Mui-selected':{
          backgroundColor:'var(--blue) !important',
          color:'#fff !important',
          borderColor:'var(--blue) !important'
        },
        
        '& .MuiPaginationItem-ellipsis':{
          border:"0px solid var(--blue) !important"
        },
        "& .MuiPaginationItem-text":{
          color:"#fff !important",
          border:"1px solid var(--grey) !important"
        },
      }}
      />
    </div>
  );
}
