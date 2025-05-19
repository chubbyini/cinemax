import { Routes, Route } from "react-router-dom";
import { MovieList,MovieDetail,PageNotFound,Search } from "../Pages";


export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
        <Routes>
            <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home" />}  />
            <Route path="movie/:id" element={<MovieDetail />} />
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular"  title="Popular" />} />
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated"  title="rated" />} />
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming"  title="upcoming" />} />
            <Route path="search" element={<Search apiPath="search/movie"  title="search" />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  )
}
