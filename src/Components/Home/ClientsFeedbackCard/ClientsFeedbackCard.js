import React from 'react';

const ClientsFeedbackCard = ({feedback}) => {
    const {name, image,designation,description} = feedback;
    return (
        <div className="col-md-4 mt-4 zoom-out">
            <div className=" border p-3 round ">
                <div className="d-flex align-items-center">
                    <img className="w-25 p-2 " src={image} alt="" />
                    <div className="p-2">
                        <h6 className="font-weight-bold">{name}</h6>
                        <p>{designation}</p>
                    </div>
                </div>
                <div>
                    <p>{description}</p>
                </div>
           </div>
        </div>
    );
};

export default ClientsFeedbackCard;