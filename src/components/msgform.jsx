import { useState } from "react";
import { sendMessage,isTyping } from "react-chat-engine"
import {SendOutlined,PictureOutlined} from '@ant-design/icons'

const Msgform=(props)=>{
     const [value,setvalue]=useState('')
     const {creds,chatId}=props;

     const handleSubmit=(event)=>{
               event.preventDefault()
               const text=value.trim();
               if(text.length>0) sendMessage(creds,chatId,{text});
               setvalue('')
     }

     const handleChange=(event)=>{
          setvalue(event.target.value)
          isTyping(props,chatId)

     }

     const handleupload=(event)=>{
          sendMessage(creds,chatId,{files:event.target.files,text:''})
     }
     return(
          <form className="message-form" onSubmit={handleSubmit}>
               <input className="message-input"
               placeholder="send message"
               value={value}
               onChange={handleChange}
               type="text" 
               onSubmit={handleSubmit}
               />
               <label htmlFor="upload-button">
                    <span className="image-button">
                         <PictureOutlined className="picture-icon"/>
                    </span>
               </label>
               <input type="file"
               multiple={false}
               id="upload-button"
               style={{display:'none'}}
               onChange={handleupload}
               />
               <button type="submit"
               className="send-button">
                    <SendOutlined className="send-icon" />
               </button>


          </form>
     )
}

export default Msgform