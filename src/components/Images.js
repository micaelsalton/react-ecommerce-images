import React, {useContext, useState} from "react"
import { Context } from "../Context"

function Images({img}){

    const {toggleFavorite, addToCart, cartItems} = useContext(Context)
    const [isHovered, setIsHovered] = useState(false)

    function heartIcon(){
        return img.isFavorite ? <i className="ri-heart-fill absolute top-1.5 left-1.5 text-red-800 hover:opacity-70 text-lg" onClick={() => toggleFavorite(img.id)}></i> 
        : isHovered && <i className="ri-heart-line absolute top-1.5 left-1.5 text-red-800 hover:opacity-70 text-lg" onClick={() => toggleFavorite(img.id)}></i>
    }

    function cartIcon(){
        const itemInCart = cartItems.some(item => item.id === img.id)
        return itemInCart ? <i onClick={() => addToCart(img)} 
                             className="ri-shopping-cart-fill absolute top-1.5 right-1.5 text-red-800 hover:opacity-70 text-lg"></i> 
             : isHovered && <i onClick={() => addToCart(img)} 
                className="ri-shopping-cart-line absolute top-1.5 right-1.5 text-red-800 hover:opacity-70 text-lg" ></i>
    }
    
    return (
            <div  
            
                className="my-2 relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <img className="rounded-md" src={img.src.original} />
                {heartIcon()}
                {cartIcon()}
            </div>
    )
}

export default Images