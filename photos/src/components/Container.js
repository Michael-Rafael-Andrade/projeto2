import { useContext, useEffect } from "react";
import { PhotoContext } from '../context/PhotoContext.js';
import Loader from './Loader.js';

function Container({searchTerm}){

    const {images, loading, runSearch} = useContext(PhotoContext)

    useEffect(() => {
        console.log("Buscando por:", searchTerm);
        runSearch(searchTerm);
    },[searchTerm]);

    return(
        <div>
            {loading ? (<Loader/>) : (<p>Gallery</p>)}
        </div>
    );
}

export default Container;