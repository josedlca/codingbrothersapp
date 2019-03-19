import React, { Component } from 'react';
import Headerspage from './../../../components/Headerspage';
import Clientsaycard from './Clientsaycard'
import './clientsay.css';

class Clientsay extends Component {
    render() {
        return (
            <section className="clientsay">
                <div className="container">
                    <Headerspage title={'What Client Say'} description={'Latest article from our client'} />
                    <div className="row">
                        <Clientsaycard />
                    </div>
                </div>
            </section>    
        );
    }
}

export default Clientsay; 