export default function planetsReducer(state = {}, action) {
    switch (action.type) {
        case 'UPDATE_LIST':
            let newState = Object.assign(state);
            newState['planets']['value'] = action.value;
            return newState;
        default:
            return state;
    }
};