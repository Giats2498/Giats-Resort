import React, { Component } from 'react'

import StyledHero from "../componets/StyledHero"
import moment from "moment";
import ReservationIcon from "../images/reserved.jpg";
import Banner from "../componets/Banner";
import {Link} from "react-router-dom";
import ReservationDetails from "../componets/ReservationDetails";
import ReservationForm from "../componets/ReservationForm";

export default class Reservation extends Component {
    constructor(props){
        super(props);
        this.state ={
            slug:this.props.match.params.slug,
            ReservationIcon
        };
    }
    render() {
        const {modifiers,name,rtype,capacity,size,breakfast,pets,price} = this.props.location.state
        const nights=moment(modifiers.end,'M/D/YYYY').diff(moment(modifiers.start,'M/D/YYYY'), 'days');
        return (
            <>  
                <StyledHero img={this.state.ReservationIcon}>
                    <Banner title="Reservation">
                        <Link to='/' className='btn-primary'>
                            return home
                        </Link>
                    </Banner>
                </StyledHero>
                <div className="reservation">
                    <ReservationDetails name={name} checkin={modifiers.start} checkout={modifiers.end} nights={nights} rtype={rtype} guests={capacity} size={size} breakfast={breakfast} pets={pets} price={price} />
                    <ReservationForm name={name} checkin={modifiers.start} checkout={modifiers.end} nights={nights} price={price*nights} guests={capacity}/>
                </div>
            </>
        );
    };
}
