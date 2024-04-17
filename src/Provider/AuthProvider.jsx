import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInAnonymously, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";




export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    // -------normal-logUp-----
    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // ---------singIn--------
    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // -----------------------google-log-in------
    const googleLog = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // -------------git-Hub------
    const gitHubLog = () => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }
    // --------------signInAnonymously-------
    const anonymousLog = () => {
        setLoading(true)
        return signInAnonymously(auth)
    }

    // -----------log-out----------?
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log("observing user", currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])



    const authInfo = {
        user,
        loading,
        creatUser,
        singInUser,
        googleLog,
        gitHubLog,
        anonymousLog,
        logOut
    }

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