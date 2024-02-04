import React from 'react'
import '../Header/Header.css'
import TemporaryDrawer from './Drawer';
import Button from '../Buttons/Button';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className='headerContainer'>
            <div>
                <h1 className='heading'>
                    Crypto Tracker
                </h1>
            </div>
            <div className="links">
                <Link to="/" className='link'>
                    Home
                </Link>
                <Link to="/compare" assName='link'>
                    Compare
                </Link>
                {/* <Link to="/watchlist" assName='link'>
                    Watchlist
                </Link> */}
                <Link to="/dashboard" assName='link'>
                    <Button text={"Dashboard"} outlined={true} onClick={()=>console.log("Btn clicked")}/>
                </Link>
            </div>
            <div className='menuIcon'>
                <TemporaryDrawer/>
            </div>
        </div>
    )
}

export default Header
