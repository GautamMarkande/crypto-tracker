import React from 'react'
import '../Header/Header.css'
import TemporaryDrawer from './Drawer';
import Button from '../Buttons/Button';
function Header() {
    return (
        <div className='headerContainer'>
            <div>
                <h1 className='heading'>
                    Crypto Tracker
                </h1>
            </div>
            <div className="links">
                <a href="/" className='link'>
                    Home
                </a>
                <a href="/compare" assName='link'>
                    Compare
                </a>
                <a href="/watchlist" assName='link'>
                    Watchlist
                </a>
                <a href="/dashboard" assName='link'>
                    <Button text={"Dashboard"} outlined={true} onClick={()=>console.log("Btn clicked")}/>
                </a>
            </div>
            <div className='menuIcon'>
                <TemporaryDrawer/>
            </div>
        </div>
    )
}

export default Header
