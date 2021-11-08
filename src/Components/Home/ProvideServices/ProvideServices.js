import React, { useEffect, useState } from 'react';
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const ProvideServices = () => {
    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-plains-08781.herokuapp.com/loadServices')
            .then(response => response.json())
            .then(result => {
                setAllServices(result);
            });
    }, []);

    return (
        <section className="container mt-5 text-center">
            <h2>
                Our <span style={{ color: '#7AB259' }}>Hotel</span>
            </h2>
            <div className="mt-5">
                <div className="row d-flex justify-content-between">
                    {allServices.map(service => (
                        <ServicesDetails service={service} key={service._id}></ServicesDetails>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProvideServices;
