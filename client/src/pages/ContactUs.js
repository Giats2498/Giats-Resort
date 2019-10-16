import React, { Component } from 'react'

import StyledHero from "../componets/StyledHero"
import defaultBcg from "../images/room-1.jpeg";
import ContactUsIcon from "../images/contactUs.jpg";
import Banner from "../componets/Banner";
import {Link} from "react-router-dom";
import ContactForm from "../componets/ContactForm";
import Map from "../componets/Map";

export default class ContactUs extends Component {
    constructor(props){
        super(props);
        this.state ={
            defaultBcg,
            ContactUsIcon
        };
    }
    
    render() {
        return (
            <>  
                <StyledHero img={this.state.ContactUsIcon || this.state.defaultBcg}>
                    <Banner title="contact us">
                        <Link to='/' className='btn-primary'>
                            return home
                        </Link>
                    </Banner>
                </StyledHero>
                <div className="contactus">
                    <ContactForm/>
                    <Map/>
                </div>
            </>
        );
    };
}
