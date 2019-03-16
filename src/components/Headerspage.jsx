import React, { Component } from 'react';
import './headerspage.css';

class Headerspage extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                    <div className="headerspage__blueline text-center">
                       <div className="headerspage__blueline--line"></div>
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <div className="headerspage__parttile">
                        <h2>{this.props.title}</h2>
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <div className="headerspage__partdesc">
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Headerspage; 