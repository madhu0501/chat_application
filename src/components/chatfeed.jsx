import React from "react"
import Msgform from "./msgform"
import Mychat from "./mychat"
import Theirchat from "./theirchat"
const Chatfeed = (props) => {
     const { chats, activeChat, userName, messages } = props
     const chat = chats && chats[activeChat]
     // console.log(chat, userName, messages)
     const renderReadreceipts=(message,ismymsg)=>{
          return(
               chat.people.map((person,index)=>person.last_read===message.id&&(
               <div 
               key={`read_${index}`}
               className='read-receipt'
               style={{
                    float:ismymsg ?'right':'left',
                    backgroundImage:`url(${person?.person?.avatar})`
               }}
               />
          ))
          )
     }

     const rendermessages = () => {
          const keys = Object.keys(messages)
          // console.log(keys)

          return keys.map((key, ind) => {
               const message = messages[key]
               const lastmsgkey = ind === 0 ? null : keys[ind - 1]
               const ismymsg = userName === message.sender.username;
               return (
                    <div key={`msg_${ind}`} style={{ width: "100%" }}>
                         <div className="message-block">

                              {


                                   ismymsg ? <Mychat message={message} />
                                        : <Theirchat message={message} lastmsg={messages[lastmsgkey]} />
                              }
                         </div>
                         <div className="read=receipts" style={{ marginRight: ismymsg ? '19px' : '0px', marginLeft: ismymsg ? '0px' : '19px' }}>
                                   {renderReadreceipts(message,ismymsg)}

                         </div>

                    </div>
               )
          })
     }
     // rendermessages()

     if(!chat)return 'loading....'
     return (
          <div className="chat-feed">
               <div className="chat-title-container">
                    <div className="chat-title">{chat.title} </div>
                    <div className="chat-subtitle">{ chat.people.map((person) => { return `${person.person.username}` })
                    }
                    </div>
               </div>
               {rendermessages()}

               <div style={{ height: '100px' }} />

               <div className="message-form-container">
                    <Msgform {...props} chatId={activeChat} />

               </div>


          </div>
     )


}
export default Chatfeed
