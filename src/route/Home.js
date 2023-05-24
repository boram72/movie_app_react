import{useState,useEffect} from "react";
import MovieLoaded from "../components/Movie"
import{API_KEY,BASE_PATH} from "../api";

function Home(){
    const [loading,setLoading] = useState(true);
    const [movies,setMovies] = useState([]);
    const [genres,setGenres] = useState([]);
    //async: 비동기 함수임을 선언>promise 반환, await: promise가 처리될때까지 함수실행 중단,프로미스(Promise): JavaScript에서 비동기 작업의 최종 완료 또는 실패를 나타내는 객체
    const getMovies = async() =>{
      const json = await (await fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`)).json();
      const genreJson = await(await fetch(`${BASE_PATH}/genre/movie/list?api_key=${API_KEY}`)).json();
     //const json = await response.json();
    // console.log(genre.genres);
      setMovies(json.results);
      setGenres(genreJson.genres);
      setLoading(false);  
    }
    console.log(movies);
    useEffect(() => {getMovies()},[])
    
    return (
      <div>
        {loading ? <h1>Loading...</h1>:<MovieLoaded movielst={movies} genres={genres}/>}
        {/* {loading ? <h1>Loading...</h1>:null} */}
      </div>
    );
}

export default Home;