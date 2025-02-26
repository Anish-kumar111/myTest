import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import Navbar from '../component/Navbar'

function Form({ halfLen }) {

    const initial_inputNames = ["fullname", "mobilenumber", "gmail", "password"]

    const [inputNames, setInputNames] = useState(initial_inputNames)



    const [formData, setFormData] = useState({ gender: "female" })

    const style = (name) => {

        const myStyle = { border: !inputNames.includes(name) ? "1px solid red" : "none" }

        return myStyle
    }

    const navigate = useNavigate()

    function submit() {
        alert() // callback function
        navigate("/")
    }

    const handleForm = (e) => {
        const name = e.target.name
        const value = e.target.value
        const checked = e.target.checked // boolean hota hai

        console.log(checked)
        let newObj;
        if (name === "agree") {
            newObj = { [name]: checked }

        } else {
            newObj = { [name]: value }
        }
        // console.log("newObj =>", newObj)
        setFormData({ ...formData, ...newObj })

    }

    const handleInputsCheckbox = () => { }
    // console.log("state", formData)
    return (
        <div>

            <div className='container flex justify-center items-center h-[600px] max-w-full'>
                <form className='from w-96 border border-red-500 p-3 rounded-md shadow-sm shadow-black border-none'>
                    <h1 className='h1 text-2xl mb-5 flex justify-center font-bold'>Lo<span className='text-red-500 font-serif  underline'>G</span>in Form </h1>
                    <div className='name flex flex-col'>
                        <input className='input p-2 bg-slate-100 text-sm rounded-md' type='checkbox'
                            checked name='fields' value={"fullname"} onChange={(e) => handleInputsCheckbox(e)}></input>
                        <label className='font-semibold text-lg text-slate-600' for="fullname"  > Full Name</label>
                        <input style={style("fullname")} disabled={!inputNames.includes("fullname")} value={formData.fullname} className='input p-2 bg-slate-100 text-sm rounded-md' type='text' placeholder='Enter Full Name' name='fullname' onChange={(event) => handleForm(event)} />
                    </div>
                    <div className='name flex flex-col'>
                        <label className='font-semibold text-lg text-slate-600' for="Mobile Number"  > Mobile Number</label>
                        <input style={style("mobilenumber")} disabled={!inputNames.includes("mobilenumber")} value={formData.mobilenumber} className='input p-2 bg-slate-100 text-sm rounded-md' type='number' placeholder='Enter Mobile Number' name='mobilenumber ' onChange={(event) => handleForm(event)}></input>
                    </div>
                    <div className='name flex flex-col'>
                        <label className='font-semibold text-lg text-slate-600' for="Gmail"  > Gmail</label>
                        <input style={style("gmail")} disabled={!inputNames.includes("gmail")} value={formData.gmail} className='input p-2 bg-slate-100 text-sm rounded-md' type='Gmail' placeholder='Enter Gmail' name='gmail
                    ' onChange={(e) => handleForm(e)}></input>
                    </div>
                    <div className='name flex flex-col'>
                        <label className='font-semibold text-lg text-slate-600' for="Password"  > Password</label>
                        <input style={style("password")} disabled={!inputNames.includes("password")} value={formData.password} className='input p-2 bg-slate-100 text-sm rounded-md' type='Password' placeholder='Enter  Password' name='password' onChange={(e) => handleForm(e)}></input>
                    </div>
                    <div>
                        <select
                            onChange={(e) => handleForm(e)}
                        >
                            <option value={"1"}>User</option>
                            <option value={"2"}>Admin</option>
                            <option value={"3"}>Developer</option>

                        </select>
                    </div>

                    <div className='name flex '>
                        <input className='input p-2 bg-slate-100 text-sm rounded-md' type='radio'
                            checked={formData.gender === "male"} name='gender' value='male' onChange={(e) => handleForm(e)}></input>
                        <label className='font-semibold text-lg text-slate-600 mx-2'  >Male</label>
                    </div>


                    <div className='name flex '>
                        <input className='input p-2 bg-slate-100 text-sm rounded-md' type='radio'
                            checked={formData.gender === "female"} name='gender' value='female' onChange={(e) => handleForm(e)}></input>
                        <label className='font-semibold text-lg text-slate-600 mx-2'  > Female</label>
                    </div>

                    <button type='button' className='btn  p-1 w-full mt-3 mb-3 bg-sky-700 text-white text-lg  rounded-md hover:bg-sky-800' onClick={() => submit()}>Click me</button>
                    {formData.gender}
                </form>
            </div>
        </div>
    )
}

export default Form