import React, { Component } from 'react'

import {Link} from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import {FaFacebookSquare,FaTwitterSquare,FaInstagram,FaYoutubeSquare} from 'react-icons/fa';

export default class Footer extends Component {
    scrollToTop = () => {
        scroll.scrollToTop(); 
    };
    render() {
        return (
            <div className="footer">
                <div className="footer-links-top">
                    <ul>
                        <li>
                            <span onClick={this.scrollToTop}>Go to Top</span>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                        <li>
                            <Link to="/contactus">Contact us</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-social-links">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com"><span>{<FaFacebookSquare/>}</span></a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com"><span>{<FaTwitterSquare/>}</span></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com"><span>{<FaInstagram/>}</span></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com"><span>{<FaYoutubeSquare/>}</span></a>
                        </li>
                    </ul>
                </div>
                <div className="footer-links-bottom">
                    <ul className="nav left">
                        <li><a title="TERMS OF USE" href="./">TERMS OF USE</a></li>
                        <li><a title="PRIVACY POLICY"  href="./">PRIVACY POLICY</a></li>
                        <li><a title="PRIVACY COOKIES"  href="./">PRIVACY COOKIES</a></li>
                        <li><a title="TERMS AND CONDITIONS"  href="./">TERMS AND CONDITIONS</a></li>
                        <li><a title="MANAGE COOKIES" href="./">MANAGE COOKIES</a></li>
                    </ul>
                </div>
                <div className="copyright">
                    <ul>
                        <li>Copyright Giats © 2019</li>
                    </ul>
                </div>
            </div>
        )
    }
}
