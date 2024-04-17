import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInAnonymously, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";




export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const googleProvider= new GoogleAuthProvider()
    const gitHubProvider =new GithubAuthProvider()

    const [user, setUser] = useState(null)

    // -------normal-logUp-----
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
// ---------singIn--------
    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

// -----------------------google-log-in------
const googleLog=()=>{
    return signInWithPopup(auth,googleProvider)
}
// -------------git-Hub------
const gitHubLog=()=>{
    return signInWithPopup(auth,gitHubProvider)
}
// --------------signInAnonymously-------
const anonymousLog=()=>{
    return signInAnonymously(auth)
}

// -----------log-out----------?
const logOut = () => {
    return signOut(auth)
}

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("observing user", currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])



    const authInfo = { user, creatUser, singInUser,googleLog,gitHubLog,anonymousLog, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}