import React, {Component} from 'react';

class Latestcard extends Component{
    render(){
        return(
            <div className="col-md-4">
                <div className="latestcard">
                    <div className="latestcard__img">
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
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="latestcard__description--price">
                                            <p>$259,900</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="latestcard__description--icons">
                                            <ul>
                                                <li><a href="#"></a></li>
                                                <li><a href="#"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="latestcard__description--button">
                                    <a href="#">GET DETAIL</a>
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