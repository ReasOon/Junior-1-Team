import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Mypage = () => {

    const [input, setInput] = useState({
        input1: '',
        input2: '',
        input3: ''
    })

    const { input1, input2, input3 } = input; // destructuring
    const navigate = useNavigate();

    const onChangeInput = (e) => {
        const {name, value} = e.target // destructuring
        setInput({
            ...input,
            [name]:value
        })
    }

    const goToCommunity = () => {
        navigate("/Community");
        window.location.replace('/Community');
    }

    const goToInformation = () => {
        navigate("/Information");
        window.location.replace("/Information");
    }

    const Logout = () => {
        navigate(-1);
    }
  

    return (
        <div style = {{ display:"flex", width:"100%" }}>
            <div
                style = {{
                    width:"20%",
                    height:"100vh",
                    padding:"1.5rem"
                }}
            >
             <h3>
                사용자님
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
             <br  />
             <button onClick={goToInformation}>
                Information about No-Smoking
             </button>
             <button onClick={Logout}>Log out</button>
            </div>
            <div
                style = {{
                    width:"60%",
                    height:"100vh",
                    padding:"1.5rem",
                }}
            >
             <img
                style = {{
                    width:"120vh",
                    height:"100%"
                }}
              ClassName="progressImg" alt="progress" src="img/progress.png"
             />
            </div>
            {/* 커뮤니티 이동 ui */}
            <div
                style = {{
                    width:"20%",
                    height:"100vh",
                    padding:"1.5rem",
                }}
            >
             <img ClassName="comunityImg" alt="community" src="img/comunity.png" 
                onClick={goToCommunity}
             />
            </div>
        </div>
    );
}

export default Mypage;