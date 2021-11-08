import { faAddressCard, faBox, faPlus, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-4" style={{ height: '100vh' }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/serviceList" className="text-dark">
                        <FontAwesomeIcon icon={faShoppingBag} /> <span>My Orders</span>
                    </Link>
                </li>
                <li>
                    <Link to="/serviceListAdmin" className="text-dark">
                        <FontAwesomeIcon icon={faBox} /> <span>All Orders</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-dark">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="text-dark">
                        <FontAwesomeIcon icon={faAddressCard} /> <span>About Us</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar;
