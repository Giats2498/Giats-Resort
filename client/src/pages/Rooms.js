import React, { Component } from 'react'

import Hero from "../componets/Hero";
import Banner from "../componets/Banner";
import {Link} from "react-router-dom";
import RoomContainer from "../componets/RoomContainer";
import {withRoomConsumer} from "../context";

class Rooms extends Component {
    componentDidMount() {
        this.props.actions.allRooms();
    }  
    render() {
        return (
            <>
                <Hero hero="roomsHero">
                    <Banner title="our rooms">
                        <Link to='/' className='btn-primary'>
                            return home
                        </Link>
                    </Banner>
                </Hero>
                <RoomContainer/>
            </>
        );
    };
}
export default withRoomConsumer(Rooms);