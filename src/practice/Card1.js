

import React from 'react'

function Card1({name, setHeading}) {
  
  const handleChangeName = (name_) => {
    setHeading(name_)
  }

  return (
    <div>{name}
    <div><button className='border px-2 border-purple-500 rounded' onClick={() => handleChangeName("ramesh")}> ramesh</button></div>
    </div>
  )
}

export default Card1