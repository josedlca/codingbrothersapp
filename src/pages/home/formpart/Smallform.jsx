import React, { Component } from 'react';
import './smallform.css';

class Smallform extends Component {
    constructor(props){
        super(props)
        this.state={
            adress: ""
        }
    }

    handleSubmit = (event)=>{
        event.preventDefault()
    }

    handleInputChange = (event) =>{
        event.preventDefault()
        console.log(event.target.value)
        this.setState({
            adress: event.target.value
        })
    }

    render() {
        // const{adress} = this.state
        return (
            <section className="smallform">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-12">
                            <form onSubmit={this.handleSubmit} className="smallform__inps">
                                <div className="smallform__inps--adress">
                                    <input type="text" placeholder="Enter an adress, town, street, or zip" name="adress" onChange={this.handleInputChange}/>
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
                            </form>
                        </div>
                    </div>
                </div>
            </section>    
        );
    }
}

export default Smallform; 