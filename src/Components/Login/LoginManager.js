import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';

export const initializeFirebase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
};

// google sign in handler
export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then(function (result) {
            const user = result.user;
            const { displayName, email, photoURL } = user;
            const signedInUser = {
                displayName: displayName,
                email: email,
                photo: photoURL,
            };
            return signedInUser;
        })
        .catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
};

// user logOut section
export const logOutHandler = () => {
    return firebase
        .auth()
        .signOut()
        .then(function () {
            const loggedOutUser = {
                displayName: '',
                email: '',
                photo: '',
            };
            return loggedOutUser;
        })
        .catch(function (error) {
            // An error happened.
        });
};
