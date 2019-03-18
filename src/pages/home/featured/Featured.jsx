import React, { Component } from 'react';
import Headerspage from './../../../components/Headerspage';

class Featured extends Component {
    render() {
        return (
            <section className="featured">
                <div className="container">
                    <Headerspage title={'Featured Properties'} description={'Build Your Dream With Us'} />
                    <div className="row">
                        <div className="col-md-5">
                            <div className="featured__img">
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="featured__description">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="featured__description--title">
                                            <h3>Recent Developed Luxury House</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="featured__description--text">
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio tempore repudiandae nobis nostrum laudantium distinctio dignissimos libero ducimus illum, doloribus, doloremque ipsa, beatae accusamus? Necessitatibus unde nulla natus fuga ipsam!</p>
                                        </div>
                                    </div>
                                    <div className="cool-md-12">
                                        <div className="featured__description--table">
                                            <tr>
                                                <th>Start Time</th>
                                                <th>Complete Time</th>
                                                <th>Developed By</th>
                                            </tr>
                                            <tr>
                                                <td>25 Jan 2017</td>
                                                <td>30 March 2018</td>
                                                <td>Innovative Dev</td>
                                            </tr>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="featured__description--button">
                                            <a href="#">VIEW DETAILS></a>
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

export default Featured; 