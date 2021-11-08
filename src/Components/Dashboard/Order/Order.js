import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import HotelDetails from '../../Home/HotelDetails/HotelDetails';
import ServicesDetails from '../../Home/ServicesDetails/ServicesDetails';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

import Sidebar from '../Sidebar/Sidebar';

const Order = ({ dashboard }) => {
    const [user, setUser] = useContext(UserContext);
    const [allServices, setAllServices] = useState([]);
    const { id } = useParams();
    const service = allServices.filter(service => service._id === id);
    // const [file, setFile] = useState(null);
    // const handleFileChange = e => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile);
    // };

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const status = 'pending';
        const { title, price } = service[0];
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('address', data.address);
        formData.append('date', data.date);
        formData.append('phone', data.phone);
        formData.append('status', status);
        formData.append('title', title);
        formData.append('price', price);

        fetch('https://tranquil-plains-08781.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    alert('Order Placed successfully !');
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetch('https://tranquil-plains-08781.herokuapp.com/loadServices')
            .then(response => response.json())
            .then(result => {
                setAllServices(result);
            });
    }, []);

    let container = 'container';
    let col = 'col-md-6';
    let p = 'p-4';
    if (dashboard) {
        container = '';
        col = 'col-md-6';
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
                        <Sidebar></Sidebar>
                    </div>
                )}

                <div className={`row d-flex justify-content-between col-md-10 ${p} dashboard-bg ml-5`}>
                    <div className="col-md-6">
                        {service.map(service => (
                            <HotelDetails service={service} key={service._id}></HotelDetails>
                        ))}
                    </div>
                    <div className={`${col} mt-4`}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your name/company's name"
                                defaultValue={user.displayName}
                                name="name"
                                ref={register({ required: true })}
                            />
                            {errors.name && <span className="text-danger">Name is required</span>} <br />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your email address"
                                name="email"
                                defaultValue={user.email}
                                ref={register({ required: true })}
                            />
                            {errors.email && <span className="text-danger">Email address is required</span>} <br />
                            <input type="text" className="form-control" placeholder="Address" name="address" ref={register({ required: true })} />
                            {errors.address && <span className="text-danger">address is required</span>} <br />
                            <input type="date" className="form-control" placeholder="date" name="date" id="date" ref={register({ required: true })} />
                            {errors.date && <span className="text-danger">Project date is required</span>} <br />
                            <div className="row">
                                <div className="col-md-12">
                                    <input type="phone" className="form-control" placeholder="phone" name="phone" ref={register({ required: true })} />
                                    {errors.email && <span className="text-danger">phone is required</span>} <br />
                                </div>
                            </div>
                            <button type="submit" style={{ width: '120px' }} className="btn btn-dark">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;
