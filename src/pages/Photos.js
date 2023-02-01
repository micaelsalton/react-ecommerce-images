import React, {useContext} from "react"
import { Context } from "../Context"
import Images from "../components/Images"

function Photos(){

    const {allPhotos} = useContext(Context)

    const photos = allPhotos.map((image) => (
        <Images key={image.id} img={image} />
    ))
    
    return (
        <div className="columns-2 md:columns-4 gap-2 p-2">
            {photos}
        </div>
    )
}

export default Photos