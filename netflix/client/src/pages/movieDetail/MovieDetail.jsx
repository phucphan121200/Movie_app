import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import FeaturedMovie from "../../components/featuredMovie/FeaturedMovie"
import "./movieDetail.scss"
import ListCast from "../../components/listCast/ListCast"
import Related from "../../components/related/Related"

const MovieDetail = () => {
    return (
        <div className="movieDetail">
            <Navbar/>
            <FeaturedMovie/>
            <div className="sort-cast-relate">
            <ListCast/>
            <Related/>
            </div>
        </div>
    )
}

export default MovieDetail
