import React from "react";

const GenreFilter= ({genres})=>{


    function handleClick(genre){

        console.log(`Filtering by ${genre}`)
    }

    return(
        <div className="genre-filter-container">
            <h2>Filter by Genre</h2>
            <div className="btns-container">
                {
                    genres.map(genre=>{
                        return(
                            <button onClick={()=>handleClick(genre)} key={genre} >{genre}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GenreFilter