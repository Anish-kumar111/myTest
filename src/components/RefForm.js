import React, { useState } from 'react'
import { useRef } from 'react'

function RefForm() {
    const username = useRef() // is used to 
    const password = useRef()
    const isAgree = useRef()
    console.log("username.current", username)

    const [formData, setFormData] = useState()
    const handleSubmit = () => {
        // console.log("username.current", username.current)
        const data = {
            username : username.current.value, // example- username.current mai hai hmara input html object 
            password : password.current.value, // jisme se .value se value le rahe hai
            agree: isAgree.current.checked
        }
        // console.log(data)
        setFormData(data)
    }
    console.log(formData)
    return (
        <div>
            <div className='flex'>
                <label>username</label>
                <input ref={username} // ref attribute mai username ref ko dalenge
                 className='border border-gray-400' />
            </div>
            <div className='flex'>
                <label>password</label>
                <input ref={password} className='border border-gray-400' />
            </div>

            <div className='flex'>
                <input ref={isAgree}  type='checkbox' className='border border-gray-400' />
                <label>agree</label>
            </div>

            <button onClick={handleSubmit} className='p-3 border border-green-500'> Submit</button>
        </div>
    )
}

export default RefForm