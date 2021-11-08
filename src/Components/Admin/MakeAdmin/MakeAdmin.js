import React from 'react';
import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import { useForm } from 'react-hook-form';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('https://tranquil-plains-08781.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    alert('admin added successfully !');
                }
            });
    };
    return (
        <section className="container">
            <DashboardHeader></DashboardHeader>
            <div className="row">
                <div className="col-md-2">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-md-10 p-5  dashboard-bg">
                    <div className="col-md-9">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" id="email" className="form-control" placeholder="Enter email" name="email" ref={register({ required: true })} />
                                    {errors.email && <span className="text-danger">Email address is required</span>} <br />
                                </div>
                                <div className="col-md-6">
                                    <button type="submit" style={{ width: '120px' }} className="btn btn-success">
                                        send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;
