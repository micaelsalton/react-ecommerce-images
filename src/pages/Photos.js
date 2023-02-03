import React, {useContext, useState} from "react"
import { Context } from "../Context"
import Images from "../components/Images"

function Photos(){

    const {allPhotos, changeSearch} = useContext(Context)
    const [inputValue, setInputValue] = useState("")

    const photos = allPhotos.map((image) => (
        <Images key={image.id} img={image} />
    ))
    
    return (
        <main>
           <div className="flex justify-right">
                <input 
                    value={inputValue} 
                    placeholder="Busque aqui" 
                    onChange={(e)=> setInputValue(e.target.value)}
                    className="font-mono m-2 bg-blue-100 rounded-md text-center text-blue-500 text-sm" />
                <button className="fonto-mono bg-red-600 rounded-lg m-2 px-4 py-2 text-gray-100 hover:opacity-70 text-sm" 
                        onClick={()=> changeSearch(inputValue)}>Encontre as melhores imagens</button>
                </div>   
            <div className="columns-2 md:columns-4 gap-2 p-2">
                {photos}
            </div>
        </main>
    )
}

export default Photos