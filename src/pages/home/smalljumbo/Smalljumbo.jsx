import React, { Component } from 'react';
import './smalljumbo.css';

class Smalljumbo extends Component {
    render() {
        return (
            <section className="smalljumbo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="smalljumbo__title">
                                <h3>Enjoy & Remember Great Times with us</h3>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <div className="smalljumbo__text">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis maxime blanditiis  iusto placeat quam vel impedit.</p>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <div className="smalljumbo__button">
                                <a href="#">CONTACT NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
        );
    }
}

export default Smalljumbo; 