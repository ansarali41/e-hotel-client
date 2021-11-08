import React, { useEffect, useState } from 'react';
import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import AllServiceListDetails from '../AllServiceListDetails/AllServiceListDetails';

const ServiceListAdmin = ({ dashboard }) => {
    const [allServiceList, setAllServiceList] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-plains-08781.herokuapp.com/allService')
            .then(response => response.json())
            .then(data => {
                setAllServiceList(data);
            });
    }, []);

    let container = 'container';
    let p = 'p-4';
    if (dashboard) {
        container = '';
        p = '';
    }

    return (
        <section className={`${container}`}>
            {dashboard ? <div></div> : <DashboardHeader></DashboardHeader>}
            <div className="row">
                {dashboard ? (
                    <div></div>
                ) : (
                    <div className="col-md-2">
                        <AdminSidebar></AdminSidebar>
                    </div>
                )}
                <div className={`col-md-10 ${p} dashboard-bg`}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Service</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allServiceList.map(serviceList => (
                                <AllServiceListDetails serviceList={serviceList} key={serviceList._id}></AllServiceListDetails>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ServiceListAdmin;
