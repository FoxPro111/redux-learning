import * as actionsType from '../actions';

const initialState = {
    counter: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsType.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;

            return newState;

        case actionsType.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };

        case actionsType.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }

        case actionsType.SUB:
            return {
                ...state,
                counter: state.counter - action.value
            }
    }

    return state;
}

export default reducer;