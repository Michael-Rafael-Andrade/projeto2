
function Search({searchTerm}){

    return(
        <div>
            <h2>{searchTerm}</h2>
            <Container searchTerm={searchTerm} />
        </div>
    );
}

export default Search;