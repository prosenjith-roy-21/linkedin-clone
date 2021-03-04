import React from 'react'
import './Header.css'
import { useDispatch } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { auth } from './firebase'
import { logout } from './features/userSlice'

function Header() {
    const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className='header'>
            <div className="header_left">
                <img src="https://img.icons8.com/fluent/48/000000/linkedin.png"/>
                <div className="header_search">
                    <SearchIcon/>
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title='Name' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Chats' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption
                    avatar={true}
                    title='Me'
                    onClick={logoutOfApp}
                />
            </div>

        </div>
    )
}

export default Header
