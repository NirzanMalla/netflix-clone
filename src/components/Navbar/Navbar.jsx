import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

const Navbar = () => {
    const[isScrolled, setIsScrolled] = useState(false);

    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return ()=> (window.onscroll = null)
    }
  return (
    <div className= {isScrolled === true? 'navbar scrolled' : 'navbar'}>
        <div className="container">
        <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            <span>Home</span>
            <span>TV Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My list</span>
        </div>

        <div className="right">
            
                <SearchIcon className='icon'/>
            
            <span>KID</span>
            
                <NotificationsIcon className='icon'/>
            <img src="https://d3nfwcxd527z59.cloudfront.net/content/uploads/2020/06/06105416/Lionel-Messi-Barcelona-Champions-League-final-752x428.jpg" alt="Profile" />

            <div className='profile'>
            <ArrowDropDownIcon className='icon'/>
            <div className='options'>
            <span>Settings</span>
            <span>Logout</span>
            </div>
            

            </div>
            


        </div>
        </div>
    </div>
  )
}

export default Navbar
