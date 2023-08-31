import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'


function Login() {

    const navigate = useNavigate()



    const [formdata, setFromdata] = useState(
        {
            username: '',
            password: ''
        })


    const updateUsername = (value) => {

        setFromdata((state) => {
            return { ...state, username: value }
        })
    }




    const updateUserpassword = (value) => {

        setFromdata((state) => {
            return { ...state, password: value }
        })
    }


    const handleSubmit = () => {

        axios.get('http://localhost:8000/credentials', { params: formdata })
            .then((res) => {


                alert(res.data.data)
                if (res.data.data === 'Login Successfully') {

                    navigate('/Homepage')
                }
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>

            <div>

                <input onKeyUp={(e) => {
                    updateUsername(e.target.value)
                }}

                    type='username' placeholder='username' >

                </input>


                <input onKeyUp={(e) => {
                    updateUserpassword(e.target.value)
                }}

                    type='username' placeholder='username' >

                </input>

                <button onClick={() => {
                    handleSubmit()
                }}
                >submit</button>

            </div>

        </>
    )
}

export default Login
