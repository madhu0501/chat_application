import React from "react"
const Theirchat = ({ lastmsg, message }) => {
     const isfirstmsgbyuser = !lastmsg || lastmsg.sender.username !== message.sender.username;

     return (
          <div className="message-row">
               {isfirstmsgbyuser && (
                    <div className="message-avatar"
                         style={{ backgroundImage: `url(${message?.sender?.avatar})` }}

                    />
               )}



               
     {
          message?.attachments?.length > 0
               ? (
                    <img
                    src={message.attachments[0].file} alt="msg-attachment"
                    className="message-img"
                    style={{ marginLeft: isfirstmsgbyuser ? '4px' : '48px' }} />
               ) : (


                    <div className="message" style={{ float: 'left', backgroundColor: "#CABCDC", marginLeft: isfirstmsgbyuser ? '4px' : '48px' }}>
                         {message.text}
                    </div>
               )
               
               
               
               
          }

     
          </div >
     )


}
export default Theirchat