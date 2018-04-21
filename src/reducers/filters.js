import moment from 'moment';

const filtersReducerDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : moment().startOf('month'),
    endDate : moment().endOf('month')
}

export default (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER': 
            return {
                text : state.text = action.text
            }
        case 'SORT_BY_DATE':
            return {
                sortBy : 'date'
            }
        case 'SORT_BY_AMOUNT': 
            return {
                sortBy : 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':    
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}
