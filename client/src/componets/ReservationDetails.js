import React, { Component } from 'react'

export default class ReservationDetails extends Component {
    render() {
        return (
            <div className="reservation-details">
                <div  className="reservation-center">
                    <label>Booking Details</label>
                </div>
                <div>
                    <div>
                        <label>Room Name</label>
                        <label>{this.props.name}</label>
                    </div>
                    <div>
                        <label>Check-in Date</label>
                        <label>{this.props.checkin.toDateString()}</label>
                    </div>
                    <div>
                        <label>Check-out Date</label>
                        <label>{this.props.checkout.toDateString()}</label>
                    </div>
                    <div>
                        <label>Nights</label>
                        <label>{this.props.nights}</label>
                    </div>
                    <div>
                        <label>Room Type</label>
                        <label>{this.props.rtype}</label>
                    </div>
                    <div>
                        <label>Guests</label>
                        <label>{this.props.guests}</label>
                    </div>
                    <div>
                        <label>Room Size</label>
                        <label>{this.props.size}</label>
                    </div>
                    <div>
                        <label>Breakfast</label>
                        <label>{this.props.breakfast ? "Yes" : "No"}</label>
                    </div>
                    <div>
                        <label>Pets</label>
                        <label>{this.props.pets ? "Yes" : "No"}</label>
                    </div>
                    <div>
                        <label>Room Price</label>
                        <label>{this.props.price * (this.props.nights+1)}</label>
                    </div>
                </div>
            </div>
        )
    }
}
