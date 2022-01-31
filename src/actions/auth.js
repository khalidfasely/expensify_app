import { firebase, googleAuthProvider, githubAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    console.log('start login');
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

//test
export const startLoginWithGitHub = () => {
    console.log('start login');
    return () => {
        return firebase.auth().signInWithPopup(githubAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};