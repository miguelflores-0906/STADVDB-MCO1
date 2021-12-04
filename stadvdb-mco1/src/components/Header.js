import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="header-wrapper">
            <marquee className="header-Marq" behavior="alternate" scrollamount="25">
                IMDB DASHBOARD
            </marquee>
        </div>
    )
}

export default Header
