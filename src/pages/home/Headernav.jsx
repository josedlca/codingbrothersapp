import React, { Component } from 'react';
// import home from './home.css';
import logo from '../../img/logo.png';
import {Nav, NavItem , NavLink} from 'reactstrap';

console.log(logo)
class Headernav extends Component {
    render() {
        return (
            <section className="headernav">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-3">
                            <div className="home__img">
                                <img src={logo} alt="logo"/>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <Nav>
                                <NavItem><NavLink href="#">HOME</NavLink></NavItem>
                                <NavItem><NavLink href="#">ABOUT</NavLink></NavItem>
                                <NavItem><NavLink href="#">AGENT</NavLink></NavItem>
                                <NavItem><NavLink href="#">PROPERTIES</NavLink></NavItem>
                                <NavItem><NavLink href="#">TEAM</NavLink></NavItem>
                                <NavItem><NavLink href="#">NEWS</NavLink></NavItem>
                                <NavItem><NavLink href="#">CONTACT</NavLink></NavItem>
                            </Nav>
                        </div>
                    </div>
                </div>
            </section>    
        );
    }
}

export default Headernav; 