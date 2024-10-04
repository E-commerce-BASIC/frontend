import React from 'react'
import Btn from '../button/Btn'
export default function Items({ Processing, Color,name,date,Total_price,T_id,order_id }) {
    return (
        <div className="grid grid-cols-6 gap-4 text-gray-600 items-center mb-4">
            <div  >{T_id}</div>
            <div  >{name}</div>
            <div >{date}</div>
            <div>
                <span className={`text-white ${Color} rounded-full px-2 py-1 text-xs`}>{Processing}</span>
            </div>
            <div  >{Total_price}</div>

            <Btn Color={'bg-black'} order_id={order_id}/>
        </div>
    )
}


