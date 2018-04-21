import moment from 'moment';

export default (expenses, {text, sortBy, startDate, endDate}) => {//pull filters from state array
    return expenses.filter((expense) => {//returns an array of each item     that match filters
        const createdAtMoment = moment(expense.createdAt);

        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch =  endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase())
            
        //expenses.description is equal to text?

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1:-1
        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1:-1
        }
    });
}