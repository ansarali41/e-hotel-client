import React, { useContext } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const Review = () => {
    const [user, setUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        let newData = { ...data };
        newData.image = user.photo;
        console.log(newData);

        fetch('https://tranquil-plains-08781.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData),
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    alert('review submitted successfully');
                }
            });
    };

    return (
        <div className="container">
            <DashboardHeader></DashboardHeader>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 dashboard-bg">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" className="form-control" placeholder="Your name" name="name" ref={register({ required: true })} />
                            {errors.name && <span className="text-danger">Name is required</span>} <br />
                            <input type="text" className="form-control" placeholder=" Designation, Company's name" name="designation" ref={register({ required: true })} />
                            {errors.designation && <span className="text-danger">Designation and company name is required</span>} <br />
                            <textarea className="form-control" placeholder="Project details" name="description" id="description" rows="3" ref={register({ required: true })} />
                            {errors.description && <span className="text-danger">Project description is required</span>} <br />
                            <button type="submit" style={{ width: '120px' }} className="btn btn-dark">
                                send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
