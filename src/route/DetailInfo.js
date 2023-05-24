import {IMAGE_BASE_URL,YOUTUBE_URL} from "../api";
import{useState} from "react";
import styles from "./MovieDetail.module.css";
import Review from "./Review"
//`${YOUTUBE_URL}?v=${}`
function DetailInfo({info,reviews,videoPath}){
    const backgroundImageStyle = {
        backgroundImage: `url(${IMAGE_BASE_URL}/${info.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    };
    
    const [review, setReview] = useState(false);
    const onClick = () => {setReview((prev)=>!prev)};
    
    return(
        <div className={styles.background} style={backgroundImageStyle}>
            <h1>{info.title}</h1>
            <img src = {`${IMAGE_BASE_URL}/${info.poster_path}`} style={{filter: 'none'}}/>

            <a href={info.homepage}>go to homepage</a>
            <p style={{color:'white'}}>{info.overview}</p>
            <ul>
                {info.genres.map((genre,idx)=><li key={idx}>{genre.name}</li>)}
            </ul>
            
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