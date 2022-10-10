import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div className="d-flex flex-row bg-dark py-1 px-3">
        <Link to='/'>
            <div className="pl-3 btn text-light fs-5">
                Home
            </div>
        </Link>
        <Link to='/employees'>
            <div className="pl-3 btn text-light fs-5">
                Employees
            </div>
        </Link>
        <Link to='/'>
            <div className="pl-3 btn text-light fs-5">
            About Us
            </div>
        </Link>
        <Link to='/'>
            <div className="pl-3 btn text-light fs-5">
            Contact
            </div>
        </Link>
    </div>
  );
}

export default Header;
