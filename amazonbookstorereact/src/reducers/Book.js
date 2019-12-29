import * as _ from "lodash";

const initialState = {book: []};

const bookReducer = (state = initialState,action) => {
    let newState;
    switch (action.type){
        case "SET_BOOK":
            newState = _.cloneDeep(state);
            newState.book = action.all_book;
            return newState;

            default:
                return state;
    }
};

export default bookReducer;
