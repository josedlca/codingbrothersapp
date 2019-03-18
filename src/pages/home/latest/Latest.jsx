import React, { Component } from 'react';
import Headerspage from './../../../components/Headerspage';
import './latest.css';

class Latest extends Component {
    render() {
        return (
            <section className="latest">
                <div className="container">
                    <Headerspage title={'Latest Added Property'} description={'We provide good quality'} />
                </div>
            </section>    
        );
    }
}

export default Latest; 