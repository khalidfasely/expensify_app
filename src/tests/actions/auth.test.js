import { login, logout } from '../../actions/auth';

test('Should login fire correctly', () => {
    const uid = '17114';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('Should logout fire correctly', () => {
    const action = logout();
    expect(action).toEqual({ type: 'LOGOUT' });
});