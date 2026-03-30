import { createContext, useState } from "react";
import { apiKey } from '../api/Config';
import axios from 'axios';

export const PhotoContext = createContext();

function PhotoContextProvider(props){

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    async function runSearch(query){

        setLoading(true);
        setImages([]);

        try{
            // const response = await axios.get(
            // // `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}$per_page=24&format=json&nojsoncallback=1`);

            // setImages(Response.data.photos.photo);

        }catch(error){
            console.error("Erro ao buscar imagens:", error);
        }finally{
            setLoading(false);
        }
    }

    return(
       <>
           <PhotoContext.Provider value={{images, loading, runSearch}}>
                {props.children}

           </PhotoContext.Provider>
       </>
    );
}

export default PhotoContextProvider;