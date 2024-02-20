import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';


export default function Imformation({title, imformation_path, content, link_url }){
  
   
    return(
       
        <div clsssName="imformation-container" onClick={() => {window.open(link_url)}}>
                <img src ={imformation_path} alt="정보사진" width="300" height="400"/>
            <div className="imformation-info">
                <h4>{title}</h4>
                <span>{content}</span>

            </div>
        </div>
    
    )
}
