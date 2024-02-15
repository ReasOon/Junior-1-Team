import './Page_for_community.css';
import { useState } from 'react';

function Page_for_community() {
  const [backcolor,setBackcolor]=useState("");
  
  const onClick =(color)=>{
 setBackcolor(color)
}
 
  return (
    <div>
      <div>
        Page for Community
      </div>
      
      <div className='list'>

      <div className='list-first'>
      <button onClick={()=>onClick("yellow")}>Yellow</button>
      <button onClick={()=>onClick("orange")}>Orange</button>
      <button onClick={()=>onClick("green")}>Green</button>
      <button onClick={()=>onClick("black")}>Black</button>
      </div>

      <div className='list-div'>
          <div className='list-sec' style={{backgroundColor:backcolor}}></div>

          <div className='profile-icon'></div>
      </div>

      </div>
    </div>
  );
}

export default Page_for_community;
