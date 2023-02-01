import React, {useContext, useState} from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

function Cart(){
   const {cartItems, emptyCart} = useContext(Context)
   const [buttonText, setButtonText] = useState("Comprar")
   const total = cartItems.length * 5.99
   const cartItemElements = cartItems.map(image => (
    <CartItem key={image.id} img={image}/>
   ))
    
   function sendOrder(){
    setButtonText("Enviando o pedido...")
    setTimeout(()=>{
        setButtonText("Comprar")
        emptyCart()
    },3000)
    
   }
 
    return (
       <div className=" flex flex-col p-4 h-screen">
        {cartItems.length > 0 && <h1>Seu pedido:</h1>}
        {cartItemElements}
        {cartItems.length > 0 ? 
        <div className="flex flex-col pt-4">
            <p className="font-semibold">Valor:</p>
            <h3>R$:{total}</h3>
            <button 
            onClick={sendOrder}
            className="bg-blue-800 text-blue-100 text-lg px-4 py-2 rounded-lg self-center my-6 font-semibold tracking-wider">{buttonText}</button>
        </div>
        : <p>Não há compras no momento</p>}
       </div>
    )
}

export default Cart