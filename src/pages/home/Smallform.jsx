import React, { Component } from 'react';
import './smallform.css';

class Smallform extends Component {
    render() {
        return (
            <section className="smallform">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-12">
                            <div className="smallform__inps">
                                <div className="smallform__inps--adress">
                                    <input type="text" placeholder="Enter an adress, town, street, or zip"/>
                                </div>
                                <div className="smallform__inps--type">
                                    <select name="" id="">
                                        <option value="1">option 1</option>
                                        <option value="1">option 2</option>
                                        <option value="1">option 3</option>
                                    </select>
                                </div>
                                <div className="smallform__inps--status">
                                    <select name="" id="">
                                        <option value="1">option 1</option>
                                        <option value="1">option 2</option>
                                        <option value="1">option 3</option>
                                    </select>
                                </div>
                                <div className="smallform__inps--budget">
                                    <select name="" id="">
                                        <option value="1">option 1</option>
                                        <option value="1">option 2</option>
                                        <option value="1">option 3</option>
                                    </select>
                                </div>
                                <div className="smallform__inps--btn">
                                    <input type="submit" value="SEARCH"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
        );
    }
}

export default Smallform; 