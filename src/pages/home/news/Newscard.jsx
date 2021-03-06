import React, { Component } from 'react';
import './newscard.css';

class Newscard extends Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="newscard">
                    <div className="newscard__img">
                    
                    </div>
                    <div className="newscard__description">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="newscard__description--title">
                                    <p>Before you start write, have a clear understanding</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="newscard__description--text">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolore, facilis necessitatibus illo in dicta ad tempore sequi quae dolores tenetur excepturi</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="col-md-12">
                                <div className="newscard__description--footer">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 align-self-center">
                                            <div className="newscard__description--footer_user">
                                                <div className="newscard__description--footer_user-img">
                                                
                                                </div>
                                                <div className="newscard__description--footer_user-name">
                                                    <p>BY ADMIN</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <div className="newscard__description--footer_readmore">
                                                <a href="#">READ MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newscard; 