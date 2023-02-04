import React, {useContext} from "react"
import { Context } from "../Context"
import Images from "../components/Images"
import SearchBar from "../components/SearchBar"

function Photos(){

    const {allPhotos} = useContext(Context)
    

    const photos = allPhotos.map((image) => (
        <Images key={image.id} img={image} />
    ))
    
    return (
        <main>
            <SearchBar />
            <div className="columns-2 md:columns-4 gap-2 p-2">
                {photos}
            </div>
        </main>
    )
}

export default Photos