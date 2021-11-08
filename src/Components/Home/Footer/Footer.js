import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="section footer-classic context-dark bg-image py-4 pl-5" style={{ background: ' #343A40' }}>
            <div className="container">
                <div className="row row-30">
                    <div className="col-md-4 col-xl-5" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="pr-xl-4">
                            <Link className="brand pt-3 pb-3" to="/">
                                <img className="logo-img w-50" src="https://i.ibb.co/XCV2Xmn/cropped-logo-ehotel.png" alt="" />
                            </Link>
                            <p>Best hotel are here</p>
                            <p className="rights">
                                <span>©  </span>
                                <span className="copyright-year">{new Date().getFullYear()}</span>
                                <span>. </span>
                                <span>All Rights Reserved.</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5>Contacts</h5>
                        <dl className="contact-list">
                            <dt>Address:</dt>
                            <dd>Dhaka, Bangladesh</dd>
                        </dl>
                        <dl className="contact-list">
                            <dd>
                                <a href="mailto:#">e.hotel@gmail.com</a>
                            </dd>
                        </dl>
                        <dl className="contact-list">
                            <dd>+88387983783</dd>
                        </dl>
                    </div>
                    <div className="col-md-4 col-xl-3">
                        <h5>Links</h5>
                        <ul className="nav-list">
                            <li>
                                <a href="/">About</a>
                            </li>
                            <li>
                                <a href="/">Awards</a>
                            </li>
                            <li>
                                <a href="/">Contacts</a>
                            </li>
                            <li>
                                <a href="/">Our Success</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
