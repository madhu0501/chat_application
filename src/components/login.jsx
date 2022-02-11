import { useState } from "react"
import axios from 'axios'

const Login=()=>{



     const [username,setusername]=useState('')
     const [password,setpassword]=useState('')
     const [err,seterr]=useState('')

      const handleSubmit=async (e)=>{
           e.preventDefault();
           const auth={'Project-ID':"0c4fac13-8f2b-4864-bdc0-1e03a04f83e4",'User-Name':username,'User-Secret':password}
          try{
             await axios.get('https://api.chatengine.io/chats',{headers:auth})
             localStorage.setItem('username',username)
             localStorage.setItem('password',password)

          //    window.location.reload(true)
         

          }catch(error){
                    seterr('opps incorrect')
          }
      }

     return(
          <div className="wrapper">
               <div className="form">
                    <h1 className="title">Chat app</h1>
                    {/* <form onSubmit={handleSubmit}> */}
                    <form onSubmit={handleSubmit}>


                         <input type="text" 
                         value={username}
                         onChange={(event)=>setusername(event.target.value)}
                         className="input"
                         placeholder="usename"
                         required
                         />
                           <input type="password" 
                         value={password}
                         onChange={(event)=>setpassword(event.target.value)}
                         className="input"
                         placeholder="password here"
                         
                         />
                         <div align="center">
                              <button type="Submit" className="button"
                              onSubmit={handleSubmit}
                              ><span>start</span></button>

                         </div>
                         <h2 className="error">{err}</h2>
                    </form>
                    
                    
               </div>



          </div>
     )
}
export default Login