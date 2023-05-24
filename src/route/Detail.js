import{useEffect,useState} from "react";
import{API_KEY,BASE_PATH} from "../api";
import {useParams} from "react-router-dom";
import DetailInfo from "./DetailInfo";
//`${YOUTUBE_URL}?v=${}`

function Detail(){
    const [loading,setLoading] = useState(true);
    const [details,setDetails] = useState([]);
    const [reviews,setReviews] = useState([]);
    const [videoPath,setVideoPath] = useState([]);
    const {movieId} = useParams();
    const getMovieDetails = async() =>{
        const detailJson = await(await fetch(`${BASE_PATH}/movie/${movieId}?api_key=${API_KEY}`)).json(); 
        const reviewJson = await(await fetch(`${BASE_PATH}/movie/${movieId}/reviews?api_key=${API_KEY}`)).json();
        const videoJson = await(await fetch(`${BASE_PATH}/movie/${movieId}/videos?api_key=${API_KEY}`)).json();
        //console.log(videoJson.results[0].key);
        setDetails(detailJson);
        setReviews(reviewJson.results);
        setVideoPath(videoJson.results[0].key);
        setLoading(false);
       
    }

    useEffect(() => {getMovieDetails()},[])
    //console.log(videoPath);
    return(
        <div>
            {loading ? <h1>Loading..</h1>: <DetailInfo info={details} reviews={reviews} videoPath={videoPath}/>}
        </div>
        
    )
}

export default Detail;  

