import React from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom';

function Nav () {

    const logo = "https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
    const avatar = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
    const navigateTo = useNavigate()

    function logout() {
        navigateTo('/login')
    }

    return (
        <div className="nav-container"> 
            <img className="nav-logo" src={logo} alt="NetFlix"></img>
            <img className="nav-avatar" src={avatar} alt="CAI-2023"></img>
            <button className="btn-logout" onClick={() => { logout() }}>Logout</button>  
        </div>
    )

}

export default Nav;