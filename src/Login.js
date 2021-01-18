import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';

const Login = () => {

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .catch(error => {
                alert(error.message)
            })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Symbol.png" alt="" />
                <h1>Sign in to twitter</h1>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    );
};

export default Login;
