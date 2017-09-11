export const SET_INITIAL_STATE = 'template/SET_INITIAL_STATE';

const setInitialState = () => {
    const initialState = {
        title: 'React Template',
        subTitle: 'PWA2000'
    }
    return {
        type: SET_INITIAL_STATE,
        payload: initialState
    }
}

export { setInitialState };