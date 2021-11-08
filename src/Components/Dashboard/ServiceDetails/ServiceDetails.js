import React from 'react';

const ServiceDetails = ({ service }) => {
    const { title, status, price } = service;

    let bgColor = '';
    let textColor = '';
    if (status === 'pending') {
        bgColor = '#FFE3E3';
        textColor = 'red';
    } else if (status === 'done') {
        bgColor = '#C6FFE0';
        textColor = 'green';
    } else if (status === 'on going') {
        bgColor = '#fde0a9';
        textColor = 'orange';
    }
    // delete user task or event from admin
    const deleteRegistrationOfUser = id => {
        console.log('register deleted', id);
        fetch(`https://tranquil-plains-08781.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Successfully Deleted');
                }
            });
    };

    return (
        <div className="col-md-4 mb-3">
            <div className="shadow p-4 bg-white rounded">
                <div className="d-flex justify-content-between">
                    <p style={{ background: `${bgColor}`, color: `${textColor}` }} className="px-3 py-1 round">
                        {status}
                    </p>
                </div>
                <h6>{title}</h6>
                <p>${price}</p>
                <button className="btn btn-primary" onClick={() => deleteRegistrationOfUser(service._id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ServiceDetails;
