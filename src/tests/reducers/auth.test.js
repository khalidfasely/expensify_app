import authReducer from '../../reducers/auth';

test('Should set uid for login', () => {
    const uid = '17114';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state.uid).toEqual(action.uid);
});

test('Should clear uid for logout', () => {
    const uid = '17114';
    const action = { type: 'LOGOUT' };
    const state = authReducer({ uid }, action);
    expect(state).toEqual({});
});