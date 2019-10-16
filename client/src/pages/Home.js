import React, { Component } from 'react'

import Hero from "../componets/Hero";
import Banner from "../componets/Banner";
import {Link} from "react-router-dom";
import Services from "../componets/Services";
import FeaturedRooms from "../componets/FeaturedRooms";
import {withRoomConsumer} from "../context";


class Home extends Component {
    componentDidMount() {
        this.props.actions.featuredRooms();
    }  
    render() {
        
        return (
            <>
                <Hero>
                    <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                        <Link to='/rooms' className="btn-primary">
                            our rooms
                        </Link>
                    </Banner>
                </Hero>
                <Services/>
                <FeaturedRooms/>
            
            </>
        );
    }
}
export default withRoomConsumer(Home);