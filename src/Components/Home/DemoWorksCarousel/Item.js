import React from 'react';

const Item = (props) => {
    return (
        <div className="text-center navy-bg">
            <img style={{ height: '300px'}} className="w-auto" src={props.item.image} alt=""/>
        </div>
    );
};

export default Item;