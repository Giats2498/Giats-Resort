import React, { Component } from "react";
import { DateRangePicker } from "react-dates";
import moment from "moment";

export default class DateRangeSelector extends Component {
  state = {
    startDate: moment(),
    endDate: moment(),
    focusedInput: null,
    VERTICAL_ORIENTATION:true
  };

  handleDateChange = ({ startDate, endDate }) =>{
    
    this.setState({ startDate, endDate });
    console.log(this.state.startDate);
  }
    
  handleFocusChange = focusedInput => this.setState({ focusedInput });

  isBlocked = day => {
    const availableDates = ["2019-10-15", "2019-10-16", "2019-10-17", "2019-10-06", "2019-10-18", "2019-10-19", "2019-10-20"]
    return !availableDates.some(date => day.isSame(date), 'day')
}
 
  render = () => (
    <DateRangePicker
       endDate={this.state.endDate}
       endDateId="endDate"
       focusedInput={this.state.focusedInput}
       isOutsideRange={day => (moment().subtract(1, 'days').diff(day) > 0)}
       onDatesChange={this.handleDateChange}
       onFocusChange={this.handleFocusChange}
       startDate={this.state.startDate}
       startDateId="startDate"
       numberOfMonths={1} 
       orientation={this.HORIZONTAL_ORIENTATION}
       displayFormat={() => "DD/MM/YYYY"}
       isDayBlocked={this.isBlocked}
    />
  );
}