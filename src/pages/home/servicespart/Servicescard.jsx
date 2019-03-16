import React, { Component } from 'react';
import imgcard from './../../../img/testcard.jpg';
import './servicescard.css';

class Services extends Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="servicescard">
                    <div className="servicescard__img">
                        <img src={imgcard} alt="imgcard"/>
                    </div>
                    <div className="servicescard__complement">
                        <div className="servicescard__complement--info text-center">
                            <h4>{this.props.cardtitle}</h4>
                            <p>{this.props.cardtext}</p>
                            <a href="#">VIEW DETAILS</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services; 