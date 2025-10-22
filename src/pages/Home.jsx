import { useEffect, useState } from "react"
import Moviecard from "../components/Moviecard"
function Home()
{
    const [page,setPage]= useState(1)
    const [search,setSearch]= useState()
    const [movies, setMovies]= useState([]);
    useEffect(()=>{
        let url=`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=c579983ad87b0beb27c08505711f339a`
        if(search)
        {
            url=`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=c579983ad87b0beb27c08505711f339a`
        }
        fetch(url)
        .then((response)=> response.json())
        .then((data)=>setMovies(data.results))
        .catch(err => console.error(err));
    },[page, search])
    return(
        <div>
            <input className="z-10 border backdrop-blur-md fixed top-16 left-1/2  transform -translate-x-1/2 mt-3 p-2 w-3/4 md:w-1/2 rounded text-white border-gray-700 bg-gray-500 bg-opacity-60" placeholder="Search Movies..." type="text" onChange={(e)=>{setSearch(e.target.value)}} />
            <div className="movies-container grid grid-cols-2 md:grid-cols-4 gap-4 mt-38">
                {
                    movies.map((movie)=>{
                       return <Moviecard key={movie.id} movie={movie}/>
                })}
            </div>
            <div className="pagination-container flex justify-between mt-4">
                <button className="bg-gray-600 cursor-pointer hover:bg-gray-800 ml-4 text-white px-4 py-2 rounded-md "disabled={page==1} onClick={()=>{setPage(prev=>prev-1)}}>Previous</button>
                <button className="bg-gray-600 cursor-pointer hover:bg-gray-800 mr-4 text-white px-4 py-2 rounded-md" onClick={()=>{setPage(prev=>prev+1)}}>Next</button>
            </div>
        </div>
    )
}
export default Home