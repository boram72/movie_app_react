import PropTypes from "prop-types"
import {Link} from "react-router-dom";
import{IMAGE_BASE_URL} from "../api";
import styles from "./Movie.module.css";
import {useRef, useState} from "react";

function MovieLoaded({movielst}){
    //console.log(movielst.genre_ids);
    //movielst.map((m)=>{m.adult})

    const movieTop10 = movielst.slice(0, 10);

    const handleMouseEnter = () => {
      document.querySelector(`.${styles.carousel}`).style.animationPlayState = 'paused';
    };
  
    const handleMouseLeave = () => {
      document.querySelector(`.${styles.carousel}`).style.animationPlayState = 'running';
    };

    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);


    const handleMouseDown = (event) => {
      setIsDragging(true);
      //console.dir(event.pageX);
      setStartX(event.pageX - carouselRef.current.offsetLeft);
      console.log(startX);
      // setScrollLeft(carouselRef.current.scrollLeft);
    };
    
    const handleMouseMove = (event) => {
      if (!isDragging) return;
      event.preventDefault();
      //console.log(event.clientX);
      const x = event.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 3; // 이동 거리에 따라 조절
      carouselRef.current.scrollLeft = scrollLeft - walk;
      console.log(carouselRef);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };
    
    
    return(
        <div className={styles.stage}>
          <div className={styles.carousel} onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
              
              {movieTop10.map((movie,idx)=>(
              <div key={movie.id} className = {styles.item}>
                <Link to = {`./detail/${movie.id}`} className={styles.title}>
                <h3>{idx+1}. {movie.title}</h3> {/*url에 변수를 추가해서 보낼 수 있음*/ }
                <img src = {`${IMAGE_BASE_URL}/${movie.poster_path}`} alt={movie.title} width ="280px" height="auto"/>
                <h4>⭐️:{movie.vote_average} /10 ({movie.vote_count})</h4>
                </Link>
              </div>))}

            </div>
        </div>

    )
  }

 

  MovieLoaded.propTypes = {
    movielst: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        overview:PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  
  // genre: PropTypes.arrayOf(Proptypes.string).isRequired
  export default MovieLoaded;


   // MovieLoaded.propTypes ={
  //   poster_path: PropTypes.string.isRequired,
  //   title:PropTypes.string.isRequired,
  //   overview:PropTypes.string.isRequired,

  // }


  // <p>popularity:{movie.popularity}<br/>release:{movie.release_date}<br/>{movie.overview}</p>
  //           <ul>
  //             <strong>[movie genre]</strong>
  //             {/* {movie.genre_ids.map((genre)=><li>{genre}</li>)} */}
  //             {movie.genre_ids.map((genre,idx)=><DefineGenre genreId={genre} genrelst={genres} key={idx}/>)} {/*map쓰는데key안써주면에러 */}  
  //           </ul>
