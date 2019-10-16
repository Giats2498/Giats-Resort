import React  from 'react'

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import DayPicker from "./DayPicker";

export default function SingleRoomDetails({ rooms }) {
    if (!rooms) {
        return (
            <div className="error">
                <h3>no such room could be found...</h3>
                <Link to='/rooms' className="btn-primary">
                    back to rooms
                    </Link>
            </div>
        );
    }

    const { description, capacity, size, price, extras, breakfast, pets, image, name } = rooms;

    return (
        <>      
            <DayPicker room={rooms} className="date-picker" />
            <section className="single-room">
                <div className="single-room-images">
                    {image.slice(1).map((item, index) => {
                        return <img key={index} src={`data:image/jpeg;base64,${item}`} alt={name} />
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price : ${price}</h6>
                        <h6>size : {size}dm²</h6>
                        <h6>
                            max capacity:{""}
                            {capacity > 1 ? `${capacity} people` : `${capacity} person `}
                        </h6>
                        <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item, index) => {
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
        </>
    );
}
SingleRoomDetails.propTypes = {
    rooms: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        capacity: PropTypes.number.isRequired,
        size: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        extras: PropTypes.array.isRequired,
        breakfast: PropTypes.bool.isRequired,
        pets: PropTypes.bool.isRequired,
        image: PropTypes.array.isRequired
    })
}