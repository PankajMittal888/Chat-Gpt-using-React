import React, { useEffect, useState } from 'react';
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import "./Darkmodebtn.css";
const Darkmodebtn = () => {
    const[mode,setMode]=useState("dark-mode");
    function Modesetter(){
        if(mode==="dark-mode"){
            setMode("light-mode")
        }else{
            setMode("dark-mode")
        }
    }
    useEffect(()=>{
        document.body.className=mode;
    },[mode])

  return (
    <button onClick={()=>{Modesetter()}} className='Moonbtn'>
        {mode==="dark-mode"?<MdSunny/>:<FaMoon/>}
    </button>
  )

}

export default Darkmodebtn;
