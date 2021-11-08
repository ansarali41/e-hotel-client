import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const DashboardHeader = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <div className="row p-3">
            <div className="col-md-4">
                <Link to="/">
                    <img className="w-25" src="https://i.ibb.co/XCV2Xmn/cropped-logo-ehotel.png" alt="" />
                </Link>
            </div>
            <div className="col-md-4">
                <h6>Dashboard</h6>
            </div>
            <div className="col-md-4 text-right">
                <h6>{user.displayName}</h6>
            </div>
        </div>
    );
};

export default DashboardHeader;
