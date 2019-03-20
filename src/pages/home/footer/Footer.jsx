import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer__contact">
                                <h4 className="ftitles">CONTACT INFO</h4>
                                <ul>
                                    <li><i className="fas fa-map-marker-alt"></i><p><span>ADDRESS:</span>28 Green Tower, Street Name New York City, USA</p></li>
                                    <li><i className="fas fa-phone"></i><p><span>PHONE:</span> +34 846 250 592</p></li>
                                    <li><i className="fas fa-envelope"></i><p><span>EMAIL:</span>contact@stuck.com</p></li>
                                    <li><i className="fas fa-globe"></i><p><span>WEBSITE:</span>demostuck.com</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer__service">
                                <h4 className="ftitles">CUSTOMER SERVICE</h4>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Return Policy</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Our Blog</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Terms & Condition</a></li>
                                    <li><a href="#">Faq</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer__recent">
                                <h4 className="ftitles">RECENT POST</h4>
                                <div className="footer__recent--post">
                                    <div className="row align-items-center">
                                        <div className="col-md-4">
                                            <div className="footer__recent--post_img">
                                            
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="footer__recent--post_desc">
                                                <div className="row align-items-center">
                                                    <div className="col-md-12">
                                                        <div className="footer__recent--post_desc-text">
                                                            <p>Lorem ipsum, dolor sit  adipisicing elit.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center">
                                                    <div className="col-md-8">
                                                        <div className="footer__recent--post_desc-date">
                                                            <a href="#">17 June 2017</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="footer__recent--post_desc-comments">
                                                            <p><span><i className="fas fa-comments"></i></span>15</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer__recent--post">
                                    <div className="row align-items-center">
                                        <div className="col-md-4">
                                            <div className="footer__recent--post_img">
                                            
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="footer__recent--post_desc">
                                                <div className="row align-items-center">
                                                    <div className="col-md-12">
                                                        <div className="footer__recent--post_desc-text">
                                                            <p>Lorem ipsum, dolor sit adipisicing elit.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center">
                                                    <div className="col-md-8">
                                                        <div className="footer__recent--post_desc-date">
                                                            <a href="#">17 June 2017</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="footer__recent--post_desc-comments">
                                                            <p><span><i className="fas fa-comments"></i></span>15</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer__recent--post">
                                    <div className="row ">
                                        <div className="col-md-4">
                                            <div className="footer__recent--post_img">
                                            
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="footer__recent--post_desc">
                                                <div className="row align-items-center">
                                                    <div className="col-md-12">
                                                        <div className="footer__recent--post_desc-text">
                                                            <p>Lorem ipsum, dolor s adipisicing elit.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center">
                                                    <div className="col-md-8">
                                                        <div className="footer__recent--post_desc-date">
                                                            <a href="#">17 June 2017</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="footer__recent--post_desc-comments">
                                                            <p><span><i className="fas fa-comments"></i></span>15</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer__newsletter">
                                <h4 className="ftitles">NEWSLETTER</h4>
                                <p>Lorem, ipsum dolor sit amet Exercit a a  s s Exercit cupiditate corrupti quo assumenda. </p>
                                <input type="email" placeholder="Enter Email"/>
                                <input type="submit" value="SUBMIT"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
        );
    }
}

export default Footer; 