import React, { Component } from 'react';
import './credits.css'

class Credits extends Component {
    render() {
        return (
            <section className="credits">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p>Copyright 2018 <span>Staker</span>. Designed by Theme_Ui</p>
                        </div>
                        <div className="col-md-6 text-right">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-vimeo-v"></i></a></li>
                                <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#"><i class="fab fa-tumblr"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>    
        );
    }
}

export default Credits; 