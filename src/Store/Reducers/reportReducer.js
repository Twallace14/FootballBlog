const INITIAL_STATE = {
    reports: [
        { id: '1', title: 'bring back prem', fullReport: "what do you mean" },
        { id: '2', title: 'help', fullReport: "worsed of the lot" },
        { id: '3', title: 'top 30', fullReport: "who was the best" }
    ]
}

const reportReducer = (
    state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_REPORT':
            console.log('added report', action.report);
            alert('sucess');
            return state;
        case 'ADD_REPORT_ERR':
            console.log('added report err', action.err);
            alert('something went worong');
            return state;
        default: return state
    }
}

export default reportReducer;