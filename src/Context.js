import React, {useState, useEffect, createContext} from "react"
import { createClient } from 'pexels';

const client = createClient('SNviqBm4wY9alRVnChl1AyeZs167Vqd5C9ZfLEMwwcXuhaqKwgUlArxL')
const Context = createContext()


function ContextProvider({children}){

    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems ] = useState([])
    const [search, setSearch] = useState("night")
    const query = search;

    function changeSearch(value){
        setSearch(value)
    }

    function addToCart(newItem){ 
        setCartItems(prev => (
            [...prev, newItem]
        ))
    }

    function removeFromCart(id){
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    function emptyCart(){
        setCartItems([])
    }

    function toggleFavorite(id){  
        setAllPhotos(prev => prev.map(image => {
            return image.id === id ? {...image, isFavorite: !image.isFavorite} : image
    })) 
        
    }
    
    useEffect(()=>{
        client.photos.search({ query, per_page: 15 }).then(photos => {
            setAllPhotos(photos.photos)
        });
    },[search])
    
    
    return (
        <Context.Provider 
        value={{allPhotos, 
        toggleFavorite, 
        addToCart, 
        cartItems,
        emptyCart,
        changeSearch, 
        removeFromCart}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}
