import React, { Component } from 'react';
import './clientsaycard.css';

class Clientsaycard extends Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="clientsaycard">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="clientsaycard__img">
                                <img src="" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <div className="clientsaycard__name">
                                <p>DAVID SMITH</p>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <div className="clientsaycard__work">
                                <p>Creative-lead</p>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <div className="clientsaycard__comment">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus dolore temporibus at. Veritatis fugiat, repellat eum officia! Hic.</p>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <div className="clientsaycard__start">
                                <ul>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                    <li><i className="fas fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}

export default Clientsaycard; 