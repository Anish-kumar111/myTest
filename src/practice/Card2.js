

import React, { useState } from 'react'

function Card2({ name, changeName }) {

  const handleChangeName = (name_) => {
    changeName(name_)
  }

  return (
    <div>{name}
      <div>    <button className='border px-2 border-red-300 rounded' onClick={() => handleChangeName("lokesh")}> lokesh</button>
      </div>
    </div>
  )
}

export default Card2