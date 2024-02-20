import './Page_for_community.css';
import { useState } from 'react';

function Page_for_community() {
  const [backcolor,setBackcolor]=useState("");
  const [imageSrc, setImageSrc] = useState(null);

  const onClick =(color, imageURL)=>{
  setBackcolor(color)
  setImageSrc(imageURL);
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
      <div>
       <img ClassName="comunityImg" alt="community" src="img/comunity.png" />
      </div>
      <div className='list-div'>
          <div className='list-sec' style={{backgroundColor:backcolor}}>
          {imageSrc && <img src={imageSrc} alt="Selected Color" />}
          </div>

          <div className='profile-icon'></div>
      </div>

      </div>
    </div>
  );
}

export default Page_for_community;