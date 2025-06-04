import React, { useContext } from 'react'
import "./Gpt.css";
import Darkmodebtn from './Darkmodebtn';
import { IoSend } from "react-icons/io5";
import { Datacontext } from '../Context/UserContext';
import user from "../assets/user.png";
import ai from "../assets/ai.png";



const Gpt = () => {
  let {send,input,setInput,showdata,setShowdata,animation,setAnimation,response,setResponse,backup
    }=useContext(Datacontext);

  return (
  <>
  <div className="gpt">
    <div className="content">
      {!showdata?<div className="header">
        <span>Hello sir</span>
       <span>I` m your own Assistant </span>
       <span>What can i help you</span>
       </div>:<div className='result'>
        <div className="user">
            <img src={user} alt="" width="50px" />
            <p>{backup}</p>
        </div>
        <div className="ai">
            <img src={ai} alt="" width="60px" />
           {animation?<div className='loader'>
              <hr />
              <hr />
              <hr />
           </div>: <p>{response}</p>}
        </div>
        </div>}
    </div>
    <div className="input">
      <input onChange={(e)=> setInput(e.target.value)} type="text" placeholder='search anything' value={input} />

       {input? <button onClick={()=>{
        send(input);
      }} className='sendbtn'><IoSend/></button>:null}
       <Darkmodebtn/>
    </div>
  </div>
  </>
  )
}
export default Gpt;
