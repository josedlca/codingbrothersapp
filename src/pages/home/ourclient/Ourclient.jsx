import React, { Component } from 'react';
import Headerspage from './../../../components/Headerspage';
import './ourclient.css';

class Ourclient extends Component {
    render() {
        return (
            <section className="ourclient">
                <div className="container">
                    <Headerspage title={'Our Client'} description={'Our trusted business partner'} />
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ourclient__up">
                                <div className="row justify-content-around">
                                    <div className="col-md-2">
                                        <div className="ourclient__brand">
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="ourclient__brand">
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="ourclient__brand">
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="ourclient__brand">
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="ourclient__brand">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="ourclient__bot">
                                <div className="row justify-content-around">
                                    <div className="col-md-2">
                                        <div className="ourclient__brand">
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="ourclient__brand">
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="ourclient__brand">
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="ourclient__brand">
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="ourclient__brand">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
        );
    }
}

export default Ourclient; 