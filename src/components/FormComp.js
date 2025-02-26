import React, { useState } from 'react'

function FormComp() {
    const [formData, setFormData] = useState({
        gender: "male",
    })

    const handleRadio = (e) => {
        const newval = { [e.target.name]: e.target.id }
        console.log("newval", newval)
        const newObj = { ...formData, ...newval }
        setFormData(newObj)

    }
    return (
        <div>
            <div className='flex'> button = handler onChange  <button className='border border-red-500 mx-2' onClick  >click me</button></div>
            <div className='flex'> select = state value option mai or handler onChange select mai <select onChange ><option value></option> </select></div>
            <div className='flex'> input = state value or handler onChange  <input onChange={undefined} value={3} /> (type : text, number) </div>
            <div className='flex'> input checkbox = state checked or handler onChange  <input checked={false} onChange={undefined} type='checkbox' /></div>

            <div>
                <div className='flex'> input radio = state value or handler onChange male <input onChange={handleRadio} id="male" value={formData.gender} checked={formData.gender === "male"} name="gender" type='radio' /></div>
                <div className='flex'> input radio = state value or handler onChange female   <input onChange={handleRadio} id="female" value={formData.gender} checked={formData.gender === "female"} name="gender" type='radio' /></div>
            </div>





            <textarea
                value="Radio buttons are normally presented in radio groups (a collection of radio buttons describing a set of related options). Only one radio button in a group can be selected at the same time."
                onChange
                rows={7} />


            <div>


                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
                </button>

                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                        </li>
                    </ul>
                </div>

            </div>

            <p className='mt-4 text-6xl'>{formData.gender}</p>
        </div>
    )
}

export default FormComp