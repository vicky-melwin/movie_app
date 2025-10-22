import { useState } from "react"

function GenreFilter({genreList,setSelectedGenre})
{   
    return(
        <div>
            <select className="p-2 bg-gray-700 rounded-md text-white" onChange={(e)=>setSelectedGenre(e.target.value)}>
                <option value="">All Generes</option>
                {
                    genreList.map((genre)=>{
                        return <option key={genre} value={genre.id}>{genre.name}</option>

                    })
                }
            </select>
        </div>
    )

}
export default GenreFilter