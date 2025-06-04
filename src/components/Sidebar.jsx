import React, { useContext, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FiPlus } from "react-icons/fi";
import { FaRegMessage } from "react-icons/fa6";
import './Side.css';
import { Datacontext } from '../Context/UserContext';

const Sidebar = () => {
    const[Hammer,setHammer]=useState(false);
    const {prevload,setPrevload,send,newChat}=useContext(Datacontext);
     function Againload(promt){
        send(promt)
    }
  return (
    <>
    <div className="side-bar">
        <GiHamburgerMenu id='ham' onClick={()=>{setHammer(prev=>!prev)}}/>
        <div className="new-chat" onClick={()=>{newChat()}}>
            <FiPlus/>
        {!Hammer?<p>new chat</p>:null}      
        </div>
        {prevload.map((item,index)=>{
          return(
                <div key={index} className="new-msg" onClick={()=>{Againload(item)}}>
                <FaRegMessage/>
              {!Hammer?<p>{item.slice(0,10) +"..."}</p>:null}
               </div>
          )
        })}
      

    </div>
    </>
  )
}
export default Sidebar;