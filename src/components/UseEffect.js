import React, { useEffect, useState } from 'react'
import { LoadingIcon } from '../icons/homeIcons'
import Square from './Square'

function UseEffect() {

    const [pet, setPet] = useState("loading")

    useEffect(() => {
        
        setTimeout(function () { // set state bahar use krne se error ata hai isliye useeffect mai dalte hai
            setPet("dog")
        }, 2000)

    }, []) // dependency array  dalne se code useffect ka ek baar hi run hoga


    return (
        <div>
            <div className='flex justify-center text-8xl'>{pet === "loading" ?  LoadingIcon : pet}</div>
            {/* <h1 className='text-4xl text-center'>{pet} </h1> */}
            <div>
                <button className='px-2 border border-red-500' onClick={() => setPet("Cat")}>Cat</button>
                <button className='px-2 border border-red-500' onClick={() => setPet("Parrot")}>Parrot</button>

            </div>
            
            </div>
    )
}

export default UseEffect