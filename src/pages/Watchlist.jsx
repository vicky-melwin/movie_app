import { useContext, useState } from "react"
import GenreFilter from "../components/GenreFilter"
import { WatchListContext } from "../context/WatchListContext"
import Moviecard from "../components/Moviecard"

function Watchlist()
{
    const {watchlist,genreList}=useContext(WatchListContext)
    const [selectedGenre,setSelectedGenre]=useState("")
     const [search,setSearch]= useState("")
     const filteredMovies=watchlist.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase())).filter(movie=> {return !selectedGenre ||movie.genre_ids.includes(Number(selectedGenre))})
    return(<div>
            <input className="z-10 border backdrop-blur-md fixed top-16 left-1/2  transform -translate-x-1/2 mt-3 p-2 w-3/4 md:w-1/2 rounded text-white border-gray-700 bg-gray-500 bg-opacity-60" placeholder="Search Movies..." type="text" onChange={(e)=>{setSearch(e.target.value)}}/>
            <div className="mt-40 flex justify-center">
                <GenreFilter genreList={genreList} setSelectedGenre={setSelectedGenre}/>
            </div>
            <div className="movies-container grid grid-cols-2 md:grid-cols-4 gap-4 mt-15">
                {
                    filteredMovies.map((movie)=>{
                       return <Moviecard key={movie.id} movie={movie}/>
                })}
            </div>
          </div>)
          
}
export default Watchlist