import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results?.filter(
      (video) => video.type === "Trailer"
    );
    const officialTrailer = filterData?.filter(
      (trailer) => trailer.name === "Official Trailer"
    );
    const trailer = filterData?.length
      ? officialTrailer?.length
        ? officialTrailer[0]
        : filterData[0]
      : json?.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
