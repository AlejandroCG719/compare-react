import React from "react";
import './footer.css';

const Footer = () =>{
    return (
        <div>
            <footer className="footer is-primary">
                <div className="container">
                    <div className="columns">
                        <div className="column has-t">
                            <p>And this right here is a spiffy footer,where you can put stuff</p>
                        </div>
                        <div className="column has-text-right">
                            <a href="#" className="icon">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="fa fa-facebook-f"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;