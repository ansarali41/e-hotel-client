import React from 'react';
import './Footer.css';

const ContactUs = () => {
    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <footer className="mt-5 p-5 footer-container">
            <div className="container pb-5">
                <div className="row">
                    <div className="col-md-5 text-justify">
                        <h2 className="brand-text">
                            Let us handle your <br /> project, professionally
                        </h2>
                        <p>with well written codes, we build apps for all platforms, mobile and web apps in general</p>
                    </div>
                    <div className="col-md-7 pl-5">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" placeholder="Your Enter email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Your name/company's name" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Your message"></textarea>
                            </div>
                            <button type="submit" style={{ width: '120px' }} className="btn btn-dark">
                                send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <p className="text-center">
                <small>copyright orange labs {new Date().getFullYear()}</small>
            </p>
        </footer>
    );
};

export default ContactUs;
