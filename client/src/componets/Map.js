import React, { Component } from 'react'

import {FaFacebookSquare,FaTwitterSquare,FaInstagram,FaYoutubeSquare} from 'react-icons/fa';

export default class Map extends Component {
    render() {
        return (
            <div className="contactus-map">
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe title="map" className="map-iframe" id="gmap_canvas" src="https://maps.google.com/maps?q=sahara%20beach%20bar&t=&z=9&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
                        <a href="https://www.enable-javascript.net">here are some helpful instructions</a>
                    </div>
                </div> 
                <p>
                    Sahara Resort<br/>
                    Nea Irakleia 630 80
                </p>     
                <p>
                    <a href="mailto:someone@example.com" target="_blank" rel=" noopener noreferrer">someone@example.com</a>
                </p>
                <p>
                    <a href="tel:2310322842">(2310) 322-842</a>
                </p>
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
        )
    }
}
