import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Item';
const items = [
    {
        id: 1,
        image: 'https://i.ibb.co/S0fqj2C/carousel-1.png'
    },
    {
        id: 2,
        image: 'https://i.ibb.co/Wphs0ds/carousel-2.png'
    },
    {
        id: 3,
        image: 'https://i.ibb.co/NsQXhNv/carousel-3.png'
    },
    {
        id: 4,
        image: 'https://i.ibb.co/2n9QL2P/carousel-4.png'
    },
    {
        id: 5,
        image: 'https://i.ibb.co/yqjxbSQ/carousel-5.png'
    }
]

const DemoWorksCarousel = (props) => {
    
    return (
        <div className="container text-center navy-bg my-5">
            <h5 className="text-white pt-5">Here are some of <span style={{ color:'#7AB259'}}>our works</span></h5>
            <Carousel className="p-5">
                {
                    items.map(item => <Item key={item.id} item={item} />)
                }
            </Carousel>
        </div>
    );
}

export default DemoWorksCarousel;