import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { logOutHandler } from '../../Login/LoginManager';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavMenu.css';

const NavMenu = () => {
    const [user, setUser] = useContext(UserContext);
    const userDetails = localStorage.getItem('user');
    const userLogOut = () => {
        if (userDetails.name === '') {
            logOutHandler().then(res => {
                setUser(res);
            });
        }
        localStorage.removeItem('user');
        setUser({
            displayName: '',
            email: '',
            photo: '',
        });
    };
    return (
        <Navbar bg="light-" expand="lg" className="container nav-menu-container">
            <Navbar.Brand>
                <Link className="navbar-brand" to="/">
                    <img className="w-50" src="https://i.ibb.co/XCV2Xmn/cropped-logo-ehotel.png" alt="" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="nav-link font-weight-bold mr-2" to="/">
                        Home
                    </Link>
                    <Link className="nav-link font-weight-bold mr-2" to="/about">
                        About
                    </Link>

                    {user.email ? (
                        <NavDropdown title={`${user.displayName}`} id="collasible-nav-dropdown">
                            <div className="nav-dropdown-container pl-3">
                                <Link className="dropdown-link" to="/" onClick={userLogOut}>
                                    LogOut
                                </Link>
                                <br />
                            </div>
                        </NavDropdown>
                    ) : (
                        <Link to="/login">
                            <button type="button" className="btn btn-dark">
                                Login
                            </button>
                        </Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavMenu;
