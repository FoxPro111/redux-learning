import * as actionsType from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date,
                    value: action.result
                })
            }

        case actionsType.DELETE_RESULT:
            const newResults = state.results.filter(result => result.id !== action.resultElID);

            return {
                ...state,
                results: newResults
            }

        default:
    }

    return state;
}

export default reducer;