import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Page_for_community() {
  const [backcolor,setBackcolor]=useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const navigate = useNavigate();

  const onClick =(color, imageURL)=>{
   setBackcolor(color)
   setImageSrc(imageURL);
  }

  const goToMypage = () => {
    navigate("/Mypage");
    window.location.replace('/Mypage');
  }
 
  return (
    <div>
      <div 
         style = {{
          display:" flex",
          border: "1px solid black",
          borderRadius: "10px",
          height: "100vh"
         }}
      >
      <div
        style = {{
         width: "150px",
         height: "100%",
         display:"flex",
         flexDirection: "column",
         justifyContent: "space-around"
        }} 
      >
      <button onClick={()=>onClick("yellow")}>Yellow</button>
      <button onClick={()=>onClick("orange")}>Orange</button>
      <button onClick={()=>onClick("green")}>Green</button>
      <button onClick={()=>onClick("black")}>Black</button>
      </div>
      <div>
       <img 
        style = {{
          width:"150vh",
          height:"100%"
        }}
        ClassName="comunityImg" alt="community" src="img/comunity.png" 
       />
      </div>
      <div
        style = {{
            display: "flex"
        }} 
      >
          <div className='list-sec' 
           style = {{
             backgroundColor:"backcolor",
             height:"100%",
             width:"50px"
            }}
          >
           {imageSrc && <img src={imageSrc} alt="Selected Color" />}
          </div>

          <div>
            <img 
             Onclick={goToMypage}
             style = {{
              width:"150px",
              height:"100%"
             }}
             ClassName="personImg" alt="person" src="img/person.png" />
          </div>
      </div>

      </div>
    </div>
  );
}

export default Page_for_community;