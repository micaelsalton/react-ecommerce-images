import React, {useContext, useState} from "react";
import { Context } from "../Context";

function CartItem({img}){
    const [hovered, setHovered] = useState(false)
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    const {removeFromCart} = useContext(Context)

    return (
        <div className="my-1 flex items-center justify-between">
            <i onClick={() => removeFromCart(img.id)} 
            className={`${iconClassName} text-lg`}
            onMouseEnter={()=> setHovered(true)}
            onMouseLeave={()=> setHovered(false)}></i>
            <div className="w-1/3 mr-auto ml-2 md:ml-6 p-2">
            <img className="rounded-md object-cover h-44 w-full md:h-52" src={img.src.original} />
            </div>
            <p>$5.99</p>
        </div>
    )
}

export default CartItem