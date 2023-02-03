import React, { useState } from "react";
import { Context } from "../Context"

function SearchBar(){
    const [inputValue, setInputValue] = useState("")
    const {changeSearch} = useContext(Context)
    return (
        <div className="flex justify-right">
                <input 
                    value={inputValue} 
                    placeholder="Busque aqui" 
                    onChange={(e)=> setInputValue(e.target.value)}
                    className="font-mono m-2 bg-blue-100 rounded-md text-center text-blue-500 text-sm" />
                <button className="fonto-mono bg-red-600 rounded-lg m-2 px-4 py-2 text-gray-100 hover:opacity-70 text-sm" 
                        onClick={()=> changeSearch(inputValue)}>Encontre as melhores imagens</button>
                </div>   
    )
}

export default SearchBar