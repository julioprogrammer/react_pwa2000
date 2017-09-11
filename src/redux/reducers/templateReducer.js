import { SET_INITIAL_STATE } from '../actions/templateActions'

const INITIAL_STATE = { title: '', subTitle: '' };

const templateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_INITIAL_STATE:
            return {
                ...state, 
                title: action.payload.title,
                subTitle: action.payload.subTitle
            };
        default:
         return state;
    }
};

export default templateReducer;