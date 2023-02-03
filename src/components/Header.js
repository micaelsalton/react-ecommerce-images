import React, {useContext, useState} from "react"
import {Link} from "react-router-dom"
import { Context } from "../Context"

function Header(){

    const {cartItems} = useContext(Context)
    const c = cartItems.length > 0 ? "fill" : "line" 

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
            
        </header>
    )
}

export default Header