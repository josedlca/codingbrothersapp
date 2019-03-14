import React, { Component } from 'react';
import './bigbg.css';

class Bigbg extends Component {
    render() {
        return (
            <section className="bigbg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <div className="bigbg__junbo">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="bigbg__junbo--little">
                                            <p>Enjoy your stay to the fullest extent</p>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="bigbg__junbo--big">
                                            <h1>WE WILL SOLVE YOUR PROBLEM SMOOTHLY</h1>
                                        </div>
                                    </div>
                                    <a className="mybtn" href="#test">CONTACT US</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
        );
    }
}

export default Bigbg; 