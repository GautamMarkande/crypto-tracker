import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../PriceType/PriceType.css';
export default function TogglePriceType({PriceType,handleToggleChangePrice}) {
   
    return (
        <ToggleButtonGroup
            value={PriceType}
            exclusive
            onChange={handleToggleChangePrice}
            aria-label="text alignment"
            sx={{
                '& .Mui-selected':{
                    color:'var(--blue) !important'
                },
                borderColor:"var(--blue)",
                border:"unset !important",
                '& .MuiToggleButtonGroup-grouped':{
                 border:"1px solid !important",
                 borderColor:"unset",
                 color:"var(--blue)"
                },
                '& .MuiToggleButton-standard':{
                    color:"var(--blue)"
                   }
            }}
        >
            <ToggleButton value="prices" >
                Price
            </ToggleButton>
            <ToggleButton value="market_caps" >
                Market Cap
            </ToggleButton>
            <ToggleButton value="total_volumes" >
                Total Volume
            </ToggleButton>
        </ToggleButtonGroup>
    );
}