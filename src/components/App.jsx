import React from "react";
import { ChatEngine } from "react-chat-engine";
import Chatfeed from "./chatfeed";
import Login from "./login";

const App=()=>{
     if(!localStorage.getItem('username')) return(<Login/>)
     // else
        return(
          <ChatEngine
          projectID='
          0c4fac13-8f2b-4864-bdc0-1e03a04f83e4'
          // userName={localStorage.getItem('username')}
          // userSecret={localStorage.getItem('password')}
          userName="madhu"
          userSecret="1234"
          renderChatFeed={(chatAppProps)=><Chatfeed {...chatAppProps}/>}
          
          
          />
     )
}
export default App