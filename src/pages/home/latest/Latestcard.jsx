import React, {Component} from 'react';
import './latestcard.css'

class Latestcard extends Component{
    render(){
        return(
            <div className="col-md-4">
                <div className="latestcard">
                    <div className="latestcard__img">
                        <div className="latestcard__img--sale">
                            <a href="#">For sale</a>
                        </div>
                    </div>
                    <div className="latestcard__description">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="latestcard__description--title">
                                    <h3>Luxury family home</h3>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="latestcard__description--adress">
                                    <p>Water St, Nwe York, NY, USA</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="latestcard__description--details">
                                    <ul>
                                        <li>4 Bedrooms</li>
                                        <li>3 Bathrooms</li>
                                        <li>1200 Sqft</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row align-items-center">
                                    <div className="col-md-6 align-self-center">
                                        <div className="latestcard__description--price">
                                            <p>$259,900</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 align-self-center text-right">
                                        <div className="latestcard__description--icons">
                                            <ul>
                                                <li><a href="#"><i className="fas fa-heart"></i></a></li>
                                                <li><a href="#"><i className="fas fa-share-alt"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="latestcard__description--button">
                                    <a href="#">GET DETAILS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Latestcard;