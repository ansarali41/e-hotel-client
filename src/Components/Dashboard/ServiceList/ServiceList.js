import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {
    const [user, setUser] = useContext(UserContext);
    const [services, setServices] = useState([]);
    const [fetching, setFetching] = useState(true);
    useEffect(() => {
        fetch(`https://tranquil-plains-08781.herokuapp.com/serviceList/${user.email}`)
            .then(response => response.json())
            .then(data => {
                setServices(data);
                if (!data.length) {
                    setFetching(false);
                }
            });
    }, [user.email, services]);
    return (
        <div className="container">
            <DashboardHeader></DashboardHeader>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 dashboard-bg">
                    <div className="p-5">
                        {fetching ? (
                            <div className="row">
                                {services.map(service => (
                                    <ServiceDetails service={service} key={service._id}></ServiceDetails>
                                ))}
                            </div>
                        ) : (
                            <div>
                                <h5 className="text-danger">No services found ! Please , place a order</h5>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;
