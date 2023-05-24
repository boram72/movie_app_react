import{useEffect,useState} from "react";
import{API_KEY,BASE_PATH} from "../api";
import {useParams} from "react-router-dom";
import DetailInfo from "./DetailInfo";


function Detail(){
    const [loading,setLoading] = useState(true);
    const [details,setDetails] = useState([]);
    const [reviews,setReviews] = useState([]);
    const [videoPath,setVideoPath] = useState([]);
    const [actors,setActors] = useState([]);
    const {movieId} = useParams();
    const getMovieDetails = async() =>{
        const detailJson = await(await fetch(`${BASE_PATH}/movie/${movieId}?api_key=${API_KEY}`)).json(); 
        const reviewJson = await(await fetch(`${BASE_PATH}/movie/${movieId}/reviews?api_key=${API_KEY}`)).json();
        const videoJson = await(await fetch(`${BASE_PATH}/movie/${movieId}/videos?api_key=${API_KEY}`)).json();
        const actorJson = await(await fetch(`${BASE_PATH}/movie/${movieId}/credits?api_key=${API_KEY}`)).json()
        //console.log(actorJson);
        setDetails(detailJson);
        setReviews(reviewJson.results);
        setVideoPath(videoJson.results[0].key);
        setActors(actorJson.cast);
        setLoading(false);
       
    }

    useEffect(() => {getMovieDetails()},[])
    //console.log(actors);
    return(
        <div>
            {loading ? <h1>Loading..</h1>: <DetailInfo info={details} reviews={reviews} videoPath={videoPath} actors={actors}/>}
        </div>
        
    )
}

export default Detail;  

