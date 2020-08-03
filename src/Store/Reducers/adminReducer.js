const INITIAL_STATE = {
    report: "1zNTY0N0OSgZPuQ0RUaq"
}

const adminReducer = (
    state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DELETE_REPORT':
            console.log('delete report', action.report);
            
            return state;
        case 'DELETE_REPORT_ERR':
            console.log('delete report err', action.err);
            alert('something went wrong');
            return state;
        default: return state
    }
}

export default adminReducer;