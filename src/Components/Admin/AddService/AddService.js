import React, { useState } from 'react';
import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useForm } from 'react-hook-form';
import './AddService.css';
const AddService = () => {
    const [file, setFile] = useState(null);
    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    };
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('price', data.price);

        fetch('https://tranquil-plains-08781.herokuapp.com/addService', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    alert('New service added successfully !');
                }
            })
            .catch(error => {
                console.error(error);
            });
    };
    return (
        <section className="container">
            <DashboardHeader></DashboardHeader>
            <div className="row">
                <div className="col-md-2">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-md-10 p-4  dashboard-bg">
                    <div className="col-md-10">
                        <form className="add-service-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row bg-white rounded px-5 py-3">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Project title" name="title" ref={register({ required: true })} />
                                    {errors.title && <span className="text-danger">Project title is required</span>} <br />
                                    <input type="text" className="form-control" placeholder="price" name="price" ref={register({ required: true })} />
                                    {errors.title && <span className="text-danger">Project title is required</span>} <br />
                                    <textarea
                                        className="form-control"
                                        placeholder="Project details"
                                        name="description"
                                        id="description"
                                        rows="3"
                                        ref={register({ required: true })}
                                    />
                                    {errors.description && <span className="text-danger">Project description is required</span>} <br />
                                </div>
                                <div className="col-md-6 custom-file">
                                    <label className="custom-file-label" htmlFor="file">
                                        upload project file
                                    </label>
                                    <input type="file" onChange={handleFileChange} className="custom-file-input" placeholder="upload project file" name="file" id="file" />

                                    <br />
                                </div>
                            </div>
                            <button type="submit" style={{ width: '120px' }} className="btn btn-success">
                                submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;
