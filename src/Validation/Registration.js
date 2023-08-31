import React from 'react'

import axios from 'axios'
import { useState } from 'react'

function Registration() {




    const [formdata,setFromdata]=useState(
     {username:'',
     password:''
    })


  const updateUsername = (value)=>{

    setFromdata((state)=>{
        return{...state,username:value}
    })
  }


 

  const updateUserpassword = (value)=>{

    setFromdata((state)=>{
        return{...state,password:value}
    })
  }


  const handleSubmit =()=>{

    axios.post('http://localhost:8000/credential',formdata)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  return (
    <>

    <div>

            <input onKeyUp={(e)=>{
                updateUsername(e.target.value)
            }}
            
            type='username' placeholder='username' >
            
            </input>


            <input onKeyUp={(e)=>{
                updateUserpassword(e.target.value)
            }}
            
            type='username' placeholder='username' >
            
            </input>

            <button onClick={()=>{
                handleSubmit()
            }}
            >submit</button>

    </div>
      
    </>
  )
}

export default Registration
