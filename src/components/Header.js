import React, {useContext, useState} from "react"
import {Link} from "react-router-dom"
import { Context } from "../Context"

function Header(){

    const {cartItems, changeSearch} = useContext(Context)
    const c = cartItems.length > 0 ? "fill" : "line" 
    const [inputValue, setInputValue] = useState("")

    return (
        <header>
            <div className="bg-blue-900 text-blue-100 flex justify-between px-4 py-2 text-lg shadow-lg">
                <Link to="/">
                    <p className="font-mono font-semibold hover:opacity-80 m-0">Galeria</p>
                </Link>
                <Link to="/Cart">
                    <div className="flex hover:opacity-70">
                        <i className={`ri-shopping-cart-${c} text-xl mr-1`}></i>
                    </div>
                </Link>
            </div>
            <div className="flex justify-right">
                <input 
                    value={inputValue} 
                    placeholder="Busque aqui" 
                    onChange={(e)=> setInputValue(e.target.value)}
                    className="font-mono m-2 bg-blue-100 rounded-md text-center text-blue-500 text-sm" />
                <button className="fonto-mono bg-blue-600 rounded-lg m-2 px-4 py-2 text-gray-100 hover:opacity-70 text-sm" onClick={()=> changeSearch(inputValue)}>Encontre as melhores imagens</button>
            </div>
        </header>
    )
}

export default Header