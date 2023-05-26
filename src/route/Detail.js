import{useEffect,useState} from "react";
import{API_KEY,BASE_PATH} from "../api";
import {useParams} from "react-router-dom";
import DetailInfo from "../components/Detail/DetailInfo";
import PubaoLoader from "../components/loader/PubaoLoader";


function Detail(){
    const [loading,setLoading] = useState(true);
    const [details,setDetails] = useState([]);
    const [reviews,setReviews] = useState([]);
    const [videoPath,setVideoPath] = useState([]);
    const [actors,setActors] = useState([]);
    const {movieId} = useParams();
    let teaserVideoKey = null;

    const getMovieDetails = async() =>{
        const detailJson = await(await fetch(`${BASE_PATH}/movie/${movieId}?api_key=${API_KEY}`)).json(); 
        const reviewJson = await(await fetch(`${BASE_PATH}/movie/${movieId}/reviews?api_key=${API_KEY}`)).json();
        const videoJson = await(await fetch(`${BASE_PATH}/movie/${movieId}/videos?api_key=${API_KEY}`)).json();
        const actorJson = await(await fetch(`${BASE_PATH}/movie/${movieId}/credits?api_key=${API_KEY}`)).json()
        //console.log(videoJson);
        setDetails(detailJson);
        setReviews(reviewJson.results);
        setVideoPath(videoJson.results);
        setActors(actorJson.cast);
        setLoading(false);
       
    }

  
    //console.log(teaserVideoId);
    useEffect(() => {getMovieDetails()},[])
    //console.log(actors);

    for (let i = 0; i < videoPath.length; i++) {
        const video =videoPath[i];
        if (video.type === "Teaser") {
            teaserVideoKey = video.key;
            break; // 첫 번째 "teaser" 타입의 비디오를 찾으면 반복문을 종료합니다.
        }
    }

    return(
        <div>   
            {loading ? <PubaoLoader/>: <DetailInfo info={details} reviews={reviews} videoKey={teaserVideoKey} actors={actors}/>}
        </div>
        
    )
}

export default Detail;  

