import React, { useState } from 'react';
import './Navbar.css';
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";

const Navbar = () => {
 const[menu,setMenu]=useState("shop");
 const [anchorEl, setAnchorEl] = React.useState(null);
 
    const handleClose = () => {
        setAnchorEl(null);
    };
 
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
 
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>ECART</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>setMenu("Shop")}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("Mens")}><Link  style={{textDecoration:'none'}} to='/mens'>Mens</Link>{menu==="Mens"?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("Womens")}><Link  style={{textDecoration:'none'}} to='/womens'>Womens</Link>{menu==="Womens"?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("Kids")}><Link  style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
        </ul> 
    
        <div className='nav-login-cart'>
           <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'> <img src={cart_icon} alt='' /></Link>
            <div className='nav-cart-count'>0</div>
        </div>

        <div className='nav-menu-btn' 
            style={{
                marginLeft: "40%",
            }}>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}>
                <MenuIcon />
            </Button>
            <Menu
                keepMounted
                anchorEl={anchorEl}
                onClose={handleClose}
                open={Boolean(anchorEl)}>
                <MenuItem onClick={handleClose}>
                <Link style={{textDecoration:'none'}} to='/'>Shop</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <Link  style={{textDecoration:'none'}} to='/mens'>Mens</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <Link  style={{textDecoration:'none'}} to='/womens'>Womens</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <Link  style={{textDecoration:'none'}} to='/kids'>Kids</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <Link to='/login'>Login</Link>
                </MenuItem>
                <MenuItem style={{textDecoration:'none'}} onClick={handleClose}>
                <Link  to='/cart'>Cart</Link>
                </MenuItem>
            </Menu>
        </div>
    </div>
  )
}

export default Navbar;