import React from 'react'
import './NavBar.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Img from '../../img/user1.png'

export default function NavBar() {
    const user = useSelector(state => state.user.user)
    const navigate = useNavigate()
    const handleLogout = (page) =>{
        navigate(page)
    }
    return (
        <>
            <div className='navbar_container'>
                <div style={{ display: 'flex' }}>
                    <div className='button' onClick={()=>handleLogout("/")}>Home</div>
                    <div className='button' onClick={()=>handleLogout("/leaderboard")}>Leaderboard</div>
                    <div className='button' onClick={()=>handleLogout("/new")}>New</div>
                </div>
                <div style={{ display: 'flex' }}>
                    <img src={Img} alt='user' width={70} height={40}/>
                    <div className='button'>{user?.id}</div>
                    <div className='button' onClick={()=>{navigate("/login")}}>Logout</div>
                </div>
            </div>
            <hr />
        </>
    )
}
