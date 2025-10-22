import { useContext } from "react"
import { Link } from "react-router-dom"
import { WatchListContext } from "../context/WatchListContext"
function Navbar()
{
    const {watchlist}=useContext(WatchListContext)
    return(
        <nav className="bg-black text-white flex justify-between p-4 fixed w-full top-0 z-10">
            <Link to="/" className="font-semibold text-xl">Movie App</Link>
            <Link to="/watchlist" className="text-xl">WatchList({watchlist.length})</Link>
        </nav>)
}
export default Navbar