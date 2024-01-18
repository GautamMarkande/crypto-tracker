import { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';
export default function TemporaryDrawer() {
    const [Open, setOpen] = useState(false);
    return (
        <div>
            <IconButton onClick={() => setOpen(true)}>
                <MenuRoundedIcon className='link'/>
            </IconButton>
            <Drawer anchor={'right'} open={Open} onClose={() => setOpen(false)}>
            <div className="Drawerlinks">
                <Link to="/" className='link'>
                    Home
                </Link>
                <Link to="/compare" className='link'>
                    Compare
                </Link>
                <Link to="/watchlist" className='link'>
                    Watchlist
                </Link>l
                <Link to="/dashboard" className='link'>
                    Dashboard
                </Link>
            </div>
            </Drawer>
        </div>
    );
}