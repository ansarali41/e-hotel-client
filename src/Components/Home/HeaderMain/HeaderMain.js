import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const HeaderMain = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <main style={{ height: '550px', margin: '0' }} className="row d-flex justify-content-center align-items-center mb-5">
            <div className="col-md-12">
                <Carousel activeIndex={index} onSelect={handleSelect} className="row d-flex justify-content-center align-items-center">
                    <Carousel.Item>
                        <img className="d-block w-100" style={{ height: 550 }} src="https://i.ibb.co/RY98sJN/mky-moody-AUF6-Gl4wwz-A-unsplash.jpg" alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" style={{ height: 550 }} src="https://i.ibb.co/jR2Ktbk/vojtech-bruzek-Yrxr3bs-Pd-S0-unsplash.jpg" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" style={{ height: 550 }} src="https://i.ibb.co/CKsw867/visualsofdana-T5p-L6ci-En-I-unsplash.jpg" alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </main>
    );
};

export default HeaderMain;
