import React, { useState } from 'react'

function Mypage() {

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