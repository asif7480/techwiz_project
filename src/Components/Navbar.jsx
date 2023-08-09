import Logo from '../assests/images/logo/logo.png'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Main from './Main'


const Navbar = () => {
    return (
        <>
        <header>
            <nav>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <ul className='nav'>
                    <li><NavLink className='nav-link' style={({ isActive }) => { return {color: isActive?'.active': ''}}} to='/'>Home</NavLink></li>
                    <li><NavLink className='nav-link' style={({ isActive }) => { return {color: isActive?'.active': ''}}} to='/Gallery'>Gallery</NavLink></li>
                    <li><NavLink className='nav-link' style={({ isActive }) => { return {color: isActive?'.active': ''}}} to='/Contact'>Contact</NavLink></li>
                    <li><NavLink className='nav-link' style={({ isActive }) => { return {color: isActive?'.active': ''}}} to='/Feedback'>Feedback</NavLink></li>
                </ul>
                <button className='score-card-btn'>See Score Card</button>
            </nav>
            <Main />
        </header>

        </>
    );
}

export default Navbar;