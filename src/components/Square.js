import React, { useEffect, useState } from 'react'

function Square() {
    const [side, setSide] = useState()
    const [area, setArea] = useState(0)

    useEffect(() => {
        // console.log("side change hogyi")
        if (side) {
            setArea(side * side)

        } else {
            setArea(0)
        }
    }, [side]) // dependency array mai state dalne se jab bhi state change hogi useffect ke andar ka code run hoga


    const handleSide = (e) => {
        setSide(e.target.value)
    }

    return (
        <div>
            {/* agar side undefined or null ho to zero dikhane k liye || operator use krenege  */}
            <p className='text-6xl'>Square side : {side || 0} m</p> 
            <input type='number' className="border border-x" value={side} onChange={handleSide} />
            <p className='text-6xl'>Square Area : {area} m.square</p>

        </div>
    )
}

export default Square