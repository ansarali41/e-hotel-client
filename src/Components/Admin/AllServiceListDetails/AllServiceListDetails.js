import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = ['pending', 'approve'];

const AllServiceListDetails = ({ serviceList }) => {
    const { name, title, price, email, status, _id } = serviceList;

    const handleStatus = status => {
        const serviceStatus = status.value;
        const statusValue = { serviceStatus };

        fetch(`https://tranquil-plains-08781.herokuapp.com/updateStatus/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(statusValue),
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    console.log(result);
                }
            });
    };

    return (
        <tr>
            <th>{name}</th>
            <td>{email}</td>
            <td>{title}</td>
            <td>{price}</td>
            <td>
                <Dropdown options={options} onChange={handleStatus} value={`${status}`} placeholder={`${status}`} />
            </td>
        </tr>
    );
};

export default AllServiceListDetails;
