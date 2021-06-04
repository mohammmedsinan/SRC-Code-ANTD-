import React, { useEffect, useState } from 'react'


{/* RE use componenets*/}
function ReUseNumbers ( e , p) {
    const [number , setNumber] = useState(0)
    useEffect(() => {
        return  number < p? setNumber(number+e) :number
    },[number])
  return number
}



export function FirstCondtion() {
    return (
        <div style={{display:"inline"}}>
            {ReUseNumbers(90/4000 , 116).toFixed(0)}
        </div>
    )
}


export function SeconedConstion() {
    return (
        <div style={{display:"inline"}}>
            {ReUseNumbers(90/200000 , 1.17).toFixed(2)}
        </div>
    )
}

export function ThieardCondtion() {
    return (
        <div style={{display:"inline"}}>
            {ReUseNumbers(90/100000 , 2.10).toFixed(2)}
        </div>
    )
}