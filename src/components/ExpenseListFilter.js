import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {sortByDate, sortByAmount, setTextFilter, setStartDate, setEndDate} from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {//function called when DateRange is changed
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    }
    render() {
        return(
            <div>
                <input type = "text" value={this.props.filters.text} onChange={(e)=> {//filters by text
                    this.props.dispatch(setTextFilter(e.target.value))
                }}/>
                <select// filter by selected date/amount
                    value = {this.props.filters.sortBy}
                    onChange={(e)=> {
                    if (e.target.value === 'date'){
                        this.props.dispatch(sortByDate())
                    } else if (e.target.value === 'amount'){
                        this.props.dispatch(sortByAmount())
                    }
                }}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Value</option>
                    <option></option>
                </select>
                <DateRangePicker
                    startDate = {this.props.filters.startDate}
                    endDate = {this.props.filters.endDate}
                    onDatesChange = {this.onDatesChange}
                    focusedInput = {this.state.calendarFocused}
                    onFocusChange = {this.onFocusChange}
                    showClearDates = {true}
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}
                />
            </div>
            );
        }  
}

const mapStateToProps = (state) => {
    return {
        filters : state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)