import React, { useState } from 'react'
import Card1 from './Card1'
import Card2 from './Card2'

function Callback() {
    const [heading, setHeading] = useState("Manish")

  return (
    <div>
        <h1>callback</h1>

        <div className='p-5 my-6'>
        <Card1 name={heading} setHeading={setHeading}/>
        </div>

        <div className='p-5 my-6'>
        <Card2 name={heading} changeName={setHeading} />
        </div>

    </div>
  )
}

export default Callback