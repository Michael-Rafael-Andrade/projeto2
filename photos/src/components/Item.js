import Container from "./Container.js";

function Item({searchTerm}){

    return(
        <div>
            <h2>{searchTerm} Photos</h2>
            <Container searchTerm={searchTerm}/>
            {/* <p>Container</p> */}
        </div>
    );
}

export default Item;