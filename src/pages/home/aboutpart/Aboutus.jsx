import React, { Component } from 'react';
import Headerspage from './../../../components/Headerspage';
import './aboutus.css';

class Aboutus extends Component {
    render() {
        return (
            <section className="aboutus">
                <div className="container">
                    <Headerspage title={'About us'} description={'Build Your Dream With Us'} />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="aboutus__leftside">
                                <div className="row align-items-center">
                                    <div className="col-md-12">
                                        <div className="aboutus__leftside--title">
                                            <h3>Build your dream with us</h3>
                                            <hr/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="aboutus__leftside--text">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magni in nisi mollitia dolore, numquam ratione! Corporis modi maxime ad, reiciendis, vitae magnam quos dolorem debitis ipsam, labore et adipisci.</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magni in nisi mollitia dolore, numquam ratione! Corporis modi maxime ad, reiciendis, vitae magnam quos dolorem debitis ipsam, labore et adipisci.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="aboutus__leftside--button">
                                            <a href="#">READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="aboutus__rightside">
                                <div className="aboutus__rightside--imgone">

                                </div>
                                <div className="aboutus__rightside--imgtwo">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
        );
    }
}

export default Aboutus; 