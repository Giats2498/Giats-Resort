import React, { Component } from 'react'

import defaultBcg from "../images/room-1.jpeg";
import Banner from "../componets/Banner";
import {Link} from "react-router-dom";
import {withRoomConsumer} from "../context";
import StyledHero from "../componets/StyledHero";
import SingleRoomDetails from "../componets/SingleRoomDetails";
import Loading from "../componets/Loading";

class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state ={
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }
    componentDidMount() {
        this.props.actions.singleRoom(this.state.slug);
    }  

    render() {
        let rooms = this.props.singleRoom.map(room => {
            return <SingleRoomDetails key={this.state.slug} rooms={room}/>;
        });
        const name = this.props.singleRoom.map(room => {
            return room.name;
        });
        const image = this.props.singleRoom.map(room => {
            return room.image[0];
        });
        return ( 
            <> 
                <StyledHero img={`data:image/jpeg;base64,${image}`|| this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className='btn-primary'>back to rooms</Link>
                    </Banner>
                </StyledHero>
                <div>
                    {this.props.loading ?<Loading/>:rooms}
                </div>
            </>
        );
    }
}
export default withRoomConsumer(SingleRoom);