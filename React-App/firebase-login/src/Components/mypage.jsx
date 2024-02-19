import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { authService, auth } from '../fbase'; 

const Mypage = () => {

    const [input, setInput] = useState({
        input1: '',
        input2: '',
        input3: ''
    })

    const { input1, input2, input3 } = input; // destructuring

    const onChangeInput = (e) => {
        const {name, value} = e.target // destructuring
        setInput({
            ...input,
            [name]:value
        })
    }

    return (
        <div style = {{ display:"flex", width:"100%" }}>
            {/* 개인정보 및 로그아웃 */}
            <div
                style = {{
                    width:"20%",
                    height:"100vh",
                    padding:"1.5rem"
                }}
            >
             <h3>
                이름 님
             </ h3>
             <input type="text" name="input1" placeholder="하루 흡연 횟수" value={input1} onChange={onChangeInput} />
             <input type="text" name="input2" placeholder="담배 갯수(한 팩 기준)" value={input2} onChange={onChangeInput} />
             <input type="text" name="input3" placeholder="가격(한 팩 기준)" value={input3} onChange={onChangeInput} />
             <br />
             <br />
             <div>
                 <b>프로필 </b> <br />
                  하루 {input1}번 <br />
                  담배 {input2}개 <br />
                  {input3}원
             </div>
            </div>
            {/* 진행도  */}
            <div
                style = {{
                    width:"60%",
                    height:"100vh",
                    padding:"1.5rem",
                    backgroundColor:"black"
                }}
            >
                <img>
                </img>
            </div>
            {/* 커뮤니티 이동 ui */}
            <div
                style = {{
                    width:"20%",
                    height:"100vh",
                    padding:"1.5rem",
                    backgroundColor:"pink"
                }}
            >
                <img></img>
            </div>
        </div>
    );
}

export default Mypage;