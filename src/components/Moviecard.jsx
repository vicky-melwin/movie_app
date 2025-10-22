import { useContext } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { WatchListContext } from '../context/WatchListContext'

function Moviecard({movie})
{   
    const {toggleWatchlist,watchlist}= useContext(WatchListContext)
    const inWatchlist=watchlist.some(m=>m.id===movie.id)
    return(
        <div className='bg-gray-600 p-4 rounded-lg shadow-md text-white relative'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='w-full h-80 object-contain' alt={movie.title}/>
            <h3 className='text-lg font-bold mt-4'>{movie.title}</h3>
            <p className='text-sm text-gray-400'>{movie.release_date}</p>
            <button className='absolute top-4 right-4 text-red-700 text-xl cursor-pointer' onClick={()=>toggleWatchlist(movie)}>{inWatchlist?<FaHeart/>:<FaRegHeart/>}</button>
        </div>
    )

}
export default Moviecard