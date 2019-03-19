import React, { Component } from 'react';
import Headerspage from './../../../components/Headerspage';
import './ourclient.css';

class Ourclient extends Component {
    render() {
        return (
            <section className="ourclient">
                <div className="container">
                    <Headerspage title={'Our Client'} description={'Our trusted business partner'} />
                    <div className="row">
                    </div>
                </div>
            </section>    
        );
    }
}

export default Ourclient; 