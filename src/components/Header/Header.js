/*import logo from "../../logo.svg";*/
import React, { Component} from "react";
import './Header.css'
import { Link } from "@reach/router";
import Faq from './../Faq/Faq';
import {Route} from "react-router-dom";
class  Header extends Component{
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render() {
        let menuActive = this.state.isToggleOn ? 'is-active' : '';
        return(
                <div className="navbar has-shadow">
                    <div className="container">
                        <div className="navbar-left">
                            <a className="navbar-item">MyComppany</a>
                        </div>
                        <a className="navbar-burger" onClick={ this.handleClick }>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                        <div className={'navbar-end navbar-menu ' + menuActive} >
                            <Link to="/" className="navbar-item r-item">Home</Link>
                            <Link to="" className="navbar-item r-item">Features</Link>
                            <Link to="" className="navbar-item r-item">About</Link>
                            <Link to="/faq" path="/faq" component = { Faq } className="navbar-item r-item">FAQ</Link>

                            <div className="navbar-item">
                                <p className="control">
                                    <a className="button is-primary is-outlined">
                                        <span className="icon">
                                            <i className="fa fa-download"></i>
                                        </span>
                                        <span>Join Now</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                /*<div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2> Welcome to React </h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code> src/App.js</code>and Save to reload.
                </p>*/
        );
    }
}
export default Header;
