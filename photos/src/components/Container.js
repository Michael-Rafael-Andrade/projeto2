import { useContext, useEffect } from "react";
import { PhotoContext } from '../context/PhotoContext.js';
import Loader from './Loader.js';
import Gallery from './components/Gallery.js';

function Container({searchTerm}){

    const {images, loading, runSearch} = useContext(PhotoContext)

    useEffect(() => {
        console.log("Buscando por:", searchTerm);
        runSearch(searchTerm);
    },[searchTerm]);

    return(
        <div className="photo-container">
            {loading ? (<Loader/>) : (<Gallery data={images} />)}
        </div>
    );
}

export default Container;