import {IMAGE_BASE_URL,YOUTUBE_URL} from "../../api";
import{useState} from "react";
import Review from "./Review";
import Profile from "./Profile";
//`${YOUTUBE_URL}?v=${}`
function DetailInfo({info,reviews,videoKey,actors}){
    const backgroundImageStyle = {
        backgroundImage: `url(${IMAGE_BASE_URL}/${info.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    };
    

    const [review, setReview] = useState(false);
    const onClick = () => {setReview((prev)=>!prev)};
    
    return(
        <div style={backgroundImageStyle}>
            <h1>{info.title}</h1>
            <img src = {`${IMAGE_BASE_URL}/${info.poster_path}`} style={{filter: 'none'}}/>

            <iframe src={`${YOUTUBE_URL}/${videoKey}`} width="500px" height="300px" frameBorder="0"></iframe>


            <p style={{color:'white'}}>{info.overview}</p>
            <ul>
                {info.genres.map((genre,idx)=><li key={idx}>{genre.name}</li>)}
            </ul>
            
            
            <Profile actors={actors}/>
            

            <h4>runtime:{info.runtime} min</h4>
            <h4>popularity:{info.popularity}</h4>
            <h4>release:{info.release_date}</h4>
            <h4>⭐️:{info.vote_average}</h4>
            <button onClick={onClick}>🔻Review({reviews.length})</button>
            <div>
                {review ? <Review reviews={reviews}/>:null}
                {/* <p><Review reviews={reviews}/></p> */}
            </div>
        </div>
    );
}


export default DetailInfo;  

// position: 'absolute',
// top: 0, 
// left: 0,
// width: '100%',
// height: '80%',
// backgroundSize: "cover",
// backgroundRepeat:"no-repeat", 
// backgroundPosition: "center center",
// filter: 'blur(8px)',
// zIndex:-1,