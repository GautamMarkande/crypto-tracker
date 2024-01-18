
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme,ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Grid from './Grid/Grid';


export default function TabComponent({coins}) {
    const [value, setValue] = useState('grid');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = createTheme({
        palette:{
            primary:{
                main:'#3a80e9'
            }
        }
    })
    const style={
        color:"var(--white)",
        fontSize:"1rem"
    }
    return (
        <ThemeProvider theme={theme}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" variant='fullWidth' >
                    <Tab label="Grid" value="grid" sx={style}/>
                    <Tab label="List" value="list" sx={style}/>
                </TabList>
            </Box>
            <TabPanel value="grid">
                {
                    <div className="grid_flex">
                    {
                      coins?.length>0&&coins?.map((coin)=>(
                        <Grid coin={coin} key={coin.id}/>
                      ))
                    }
                  </div>
                }
            </TabPanel>
            <TabPanel value="list">Item Two</TabPanel>
        </TabContext>
        </ThemeProvider>
    );
}