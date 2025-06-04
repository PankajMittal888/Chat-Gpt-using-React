import { useContext,createContext, Children, useState } from "react";
import getGeminiResponse from "../gemini";

export const Datacontext=createContext();

export default function UserContext({children}){
    const[input,setInput]=useState("");
    const[showdata,setShowdata]=useState(false);
    const[animation,setAnimation]=useState(false);
    const[response,setResponse]=useState("");
    const[backup,setBackup]=useState("");
    const[prevload,setPrevload]=useState([]);

    function newChat(){
        setAnimation(false)
        setShowdata();
    }

    async function send(promt){
    setResponse("");
    setShowdata(true)
    setAnimation(true)
    setBackup(promt)
    setPrevload(prev=>[...prev,promt]);
    let res=await getGeminiResponse(promt);
    setResponse(res.split("**") && res.split("*"))
    setAnimation(false)
    setInput("")
    }
    const data={
        send,
        input,setInput,showdata,setShowdata,animation,setAnimation,response,setResponse,backup,prevload,setPrevload,newChat
    }
    return(
        <Datacontext.Provider value={data}>
            {children}
        </Datacontext.Provider>
    )
}