import React, { Component } from 'react';
import Headerspage from './../../../components/Headerspage';
import Servicescard from './Servicescard';
import './services.css';

class Services extends Component {
    render() {
        return (
            <section className="services">
                <div className="container">
                    <Headerspage title={'Services'} description={'We Provide Good Quality'} />
                    <div className="row">
                        <Servicescard cardtitle={'Some'} cardtext={"Lorem odit quos nemo et? Lorem odit quos nemo et? ducimus quos nemo et? ducimus praesentium illum."}/>
                        <Servicescard />
                        <Servicescard />
                    </div>
                </div>
            </section>    
        );
    }
}

export default Services; 