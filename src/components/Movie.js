import PropTypes from "prop-types"
import {Link} from "react-router-dom";
import{IMAGE_BASE_URL} from "../api";



function MovieLoaded({movielst}){
    //console.log(movielst.genre_ids);
    //movielst.map((m)=>{m.adult})
    return(
      <div>
          {movielst.map((movie)=>(
          <div key={movie.id}>
            <h2>
              <Link to = {`./detail/${movie.id}`}>✔ {movie.title}</Link> {/*url에 변수를 추가해서 보낼 수 있음*/ }
              </h2>
            <img src = {`${IMAGE_BASE_URL}/${movie.poster_path}`} alt={movie.title}/>
            <h4>⭐️:{movie.vote_average} /10 ({movie.vote_count})</h4>
            <br/>
          </div>))}
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
