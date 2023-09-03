import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
const Navbar = () => {
  return (
    <div className='navbar'>

    
        <div>
            <h4>Dictionary App</h4>
        </div>

        <div>

        
        <nav className='link'>
        <Link className="Linnk" to="/">Home</Link>
        <Link className="Linnk" to="/history">History</Link>
        </nav>

        </div>
    </div>    
  );
};

export default Navbar;
