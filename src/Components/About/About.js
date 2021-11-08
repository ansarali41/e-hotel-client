import React from 'react';
import Footer from '../Home/Footer/Footer';
import NavMenu from '../Home/NavMenu/NavMenu';
import './About.css';

const About = () => {
    return (
        <div className="aboutus-area">
            <div>
                <NavMenu />
            </div>
            <div className="col-xs-12 pb-3">
                <img src="https://i.ibb.co/jR2Ktbk/vojtech-bruzek-Yrxr3bs-Pd-S0-unsplash.jpg" alt="" className="img-fluid" style={{ width: '100%', height: 450 }} />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="aboutus-content ">
                                <div className="text-center">
                                    <h1>
                                        About <span>Us</span>
                                    </h1>
                                    <br />
                                    <h4>What we Have!</h4>
                                </div>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam magni commodi provident, ex cumque distinctio, illo praesentium incidunt nisi
                                    id sunt, aspernatur culpa adipisci est reprehenderit alias officiis quae quidem. Minus vitae eos laudantium ab asperiores, quisquam illo
                                    repellat eius expedita quae dolore fuga doloremque fugiat nam odio eligendi? Modi tempora deserunt id delectus ipsa et sint natus, magni
                                    tempore.
                                </p>

                                <div className="counter ">
                                    <div className="single-counter text-center">
                                        <h2 className="counter">1500</h2>
                                        <p>Clients</p>
                                    </div>

                                    <div className="single-counter text-center">
                                        <h2 className="counter">10</h2>
                                        <p>international awards</p>
                                    </div>

                                    <div className="single-counter text-center">
                                        <h2 className="counter">5</h2>
                                        <p>Swimming Poll</p>
                                    </div>

                                    <div className="single-counter text-center">
                                        <h2 className="counter">2</h2>
                                        <p>VIP Rooms</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
