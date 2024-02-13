import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { authService, auth } from '../fbase';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState('');
    const [userData, setUserData] = useState(null);

    const toggleAccount = () => setNewAccount((prev) => !prev)
    const onChange = (e) => {
        const { target: { name, value } } = e;
        if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let data ;
        try {
            if(newAccount) data = await createUserWithEmailAndPassword(authService, email, password);
            else data = await signInWithEmailAndPassword(authService, email, password);
        } catch (error) {
            setError(error.message);
        }
    }

    function handleGoogleLogin() {
        const provider = new GoogleAuthProvider(); // provider를 구글로 설정
        signInWithPopup(auth, provider) // popup을 이용한 signup
          .then((data) => {
            setUserData(data.user); // user data 설정
            console.log(data) // console로 들어온 데이터 표시
          })
          .catch((err) => {
            console.log(err);
          });
      }

    return (
        <div>
            <span onClick={toggleAccount}>{newAccount? "Create Account" : "Sign in"}</span>
            <a>(클릭 시 회원가입, 로그인이 바뀜)</a>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="text"
                    placeholder='Email'
                    required
                    value={email}
                    onChange={onChange} />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={onChange} />
                <input
                    type="submit"
                    value={newAccount? "Create account" : "Sign in"} />
                    {error}
            </form>
            <div>
            <button onClick={handleGoogleLogin}>Login With Google</button>
            {userData ? userData.displayName : null}
            </div>
        </div>
    )
}

export default Auth