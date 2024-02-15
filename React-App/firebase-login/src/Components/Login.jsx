import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { authService, auth } from '../fbase';

const Login = () => {
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
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "70%",
              height: "100vh",
              padding: "1.5rem",
              backgroundColor: "white"
            }}
          >
            <div
              style={{
                textAlign:"center", jutifyContent: "center", aligiItems:"center",
                width: "100%",
                height: "50%",
                padding: "1.5rem",
                backgroundColor: "white"
              }}
            >
              <a
              style = {{
                fontSize:"40px",
                color:"red",
              }}
              >
               No-Smoking
              </a>
              <br /> <br />
              <span 
                style = {{
                  fontSize: "20px",
                }}
                onClick={toggleAccount}>
                {newAccount ? "create Account" : "Sign in"}
              </span>
              <a>(클릭 시 회원가입, 로그인으로 바뀜)</a>
              <form onSubmit={onSubmit}>
                <input
                  style = {{
                    width: "500px",
                    height: "45px",
                    fontSize: "13px",
                    border: "0",
                    borderRadius: "15px",
                    outline: "none",
                    paddingLeft: "10px",
                    backgroundColor:"lightgrey",
                    marginTop:"8px",
                    marginBottom:"15px"
                  }}
                  name="email"
                  type="text"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={onChange}
                />
                <br />
                <input
                  style = {{
                    width: "500px",
                    height: "45px",
                    fontSize: "13px",
                    border: "0",
                    borderRadius: "15px",
                    outline: "none",
                    paddingLeft: "10px",
                    backgroundColor:"lightgrey",
                    marginBottom:"25px"
                  }}
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={onChange}
                />
                <br />
                <input
                  style = {{
                    width: "150px",
                    height: "40px",
                    fontSize: "15px",
                    border: "0",
                    borderRadius: "15px",
                    outline: "none",
                    paddingLeft: "10px",
                    backgroundColor:"#d94844"
                  }}
                  type="submit"
                  value={newAccount ? "create Account" : "Sign in"}
                />
              </form>
              <h4
                style = {{
                  marginTop:"35px"
                }}
              >
               or
              </h4>
              <button
                style = {{
                  width: "200px",
                  height: "40px",
                  fontSize: "13px",
                  border: "0",
                  borderRadius: "15px",
                  outline: "none",
                  paddingLeft: "10px",
                  backgroundColor:"beige"
                }}
                onClick={handleGoogleLogin}
              >
                Login With Google</button>
            </div>
          </div>
          <div
            style = {{
              width:"30%",
              flexDirection:"column",
            }}>
          <div
            style={{
              width: "100%",
              height: "50vh",
              padding: "1.5rem",
              backgroundColor: "black",
              overflow:"scroll"
            }}
          ></div>
          <div
            style={{
              width: "100%",
              height: "50vh",
              padding: "1.5rem",
              backgroundColor: "pink",
              
            }}
          ></div>
          </div>
        </div>
      );      
}

export default Login