import React, { Component } from 'react';
import Headerspage from './../../../components/Headerspage';
import Newscard from './Newscard';
import './news.css';

class News extends Component {
    render() {
        return (
            <section className="news">
                <div className="container">
                    <Headerspage title={'Latest News'} description={'Build Your With Us'} />
                    <div className="row">
                        <Newscard />
                    </div>
                </div>
            </section>    
        );
    }
}

export default News; 