import React, { useEffect, useRef } from 'react'

function Comp() {

    const divRef = useRef()
    const count = useRef(12)
    useEffect(() => {
        console.log(count)
        const myDiv = divRef.current
        myDiv.style.color = "red"
        myDiv.style.fontSize = "2rem"
        console.log(count.current)
    }, [count.current])

    const handleIncrese = () => {
        count.current = count.current + 1

        // console.log(count.current)
    }

    // console.log(count.current)

    return (
        <>
            <div ref={divRef}>Comp </div>
            <button onClick={handleIncrese} className='border border-red-400'>+</button>
            
        </>
    )
}

export default Comp