import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, GithubAuthProvider  } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();


const Login = () => {
    const [user, setUser] = useState(null);
    // Google pop up handler
    const signInGoogleHandler = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const loggedUser = result.user;
                setUser(loggedUser);
            })
            .catch((error) => {
                console.log(error)
            })
    }
    // sign out handler
    const signOutHandler = () => {
        signOut(auth)
            .then(() => {
                console.log('successful signout');
                setUser(null)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // signInGithubHandler
    const signInGithubHandler = () => {
        signInWithPopup(auth, gitHubProvider)
        .then((result) => {
            const loggedUser = result.user;
            setUser(loggedUser);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    console.log(user);
    return (
        <div>
            <h2>Log in page</h2>
            {
                user && <div>
                    <h1>User name: {user.displayName}</h1>
                    <h2>User Email : {user.email}</h2>
                    <img src={user.photoURL} alt="" />
                </div>
            }
            {
                user && user ? <button onClick={signOutHandler}>Sign out</button>
                    : <>
                        <button onClick={signInGoogleHandler}>Sign in With Google</button><button onClick={signInGithubHandler}>Sign in With Github</button>
                    </>
            }
        </div>
    );
};

export default Login;