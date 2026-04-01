import Image from './Image.js';


function Gallery({data}){

    const results = data;

    return(
        <div >
            {
                results.length > 0 ?  
                (
                    <ul>
                        {results.map((image) => {
                            const { farm, server, id, secret, title } = image;
                            const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
                            return <Image url={url} key={id} alt={title}></Image>
                        })}
                    </ul>
                ) : (<h2>No Images Found</h2>)
            }
        </div>
    );
}

export default Gallery;