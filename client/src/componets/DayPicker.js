import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from "moment";
import { Link } from "react-router-dom";
import ProtectedValue from "../ProtectedValue";

export default class Daypicker extends React.Component {
  static defaultProps = {
    numberOfMonths: 2,
  };

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
      checkdates:false
    };
  }
  handleDayClick(day, modifiers = {}) {
    if (modifiers.disabled) {
      return;
    }
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }


  handleResetClick() {
    this.setState(this.getInitialState());
  }

  disablebutton(modifiers){
    if(modifiers.start !==undefined &&  modifiers.start!==null){
      if(modifiers.end !==undefined &&  modifiers.end!==null){
        ProtectedValue.ChangeValue(false);
        return false;
      }else{
        ProtectedValue.ChangeValue(true);
        return true;
      }
    }else{
      ProtectedValue.ChangeValue(true);
      return true;
    }
  }

  disabledDates(reservations){
      let disabledates= reservations.map(reservation =>{
        var indate= new Date(reservation.checkin);
        indate.setDate(indate.getDate() -1 );
        var outdate= new Date(reservation.checkout);
        outdate.setDate(outdate.getDate() +1 );
        let disabledate={before:outdate,after:indate};
        return disabledate;
      });
      disabledates.push({before: moment().toDate()});
      return disabledates;
  }
  render() {
    
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    const { capacity, size, price, breakfast, pets, name,rtype,reservation } = this.props.room;
    const disabledates=this.disabledDates(reservation);
    
    return (
      <div className="single-room-reservation">
        <div className="single-room-reservationform">
            <DayPicker
              className="Selectable"
              numberOfMonths={this.props.numberOfMonths}
              selectedDays={[from, { from, to }]}
              modifiers={modifiers}
              onDayClick={this.handleDayClick}
              disabledDays={disabledates}
            />
            <div className="single-room-reservationbutton">
              <Link to={{pathname:`/reservation`, state: {modifiers,name,rtype,capacity,size,breakfast,pets,price}}}>
                <button disabled={this.disablebutton(modifiers)}>Book Now</button>
              </Link>
            </div>
            <Helmet>
              <style>{`
            .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
              position: relative;
            
              background-color: #af9a7d;
              color: #F0F8FF;
            }        
            .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
              background-color: #f0f8ff !important;
              color: #af9a7d;
            }
            .Selectable .DayPicker-Day {
              border-radius: 0 !important;
            }
            .Selectable .DayPicker-Day--start {
              border-top-left-radius: 50% !important;
              border-bottom-left-radius: 50% !important;
            }
            .Selectable .DayPicker-Day--end {
              border-top-right-radius: 50% !important;
              border-bottom-right-radius: 50% !important;
            }
        `}</style>
            </Helmet>
        </div>
      </div>
    );
  }
}
