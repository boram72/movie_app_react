import{useState,useEffect} from "react";

function MovieLoaded({movielst}){
  return(
    <div>
        {movielst.map((movie)=>(
        <div key={movie.id}>
          <h1>{movie.rank}</h1>
          <img src = {`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title}/>
          <h2>{movie.title}</h2>
          <p>popularity:{movie.popularity}<br/>release:{movie.release_date}<br/>{movie.overview}</p>
          <h4>⭐️:{movie.vote_count}</h4>
          <br/>
          {/* <ul>
            {movie.genres.map(g => <li key={g}>{g}</li>)}
          </ul> */}
        </div>))}
      </div>
  )
}

function App() {
  const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState([]);
  //async: 비동기 함수임을 선언>promise 반환, await: promise가 처리될때까지 함수실행 중단,프로미스(Promise): JavaScript에서 비동기 작업의 최종 완료 또는 실패를 나타내는 객체
  const getMovies = async() =>{
    const json = await (await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=c8d25a0e368c2fa300db030d25d976a2`)).json();
   //const json = await response.json();
  //console.log(json.results);
    setMovies(json.results);
    setLoading(false);  
  }
  console.log(movies);
  useEffect(() => {getMovies()},[])
  
  return (
    <div>
      {loading ? <h1>Loading...</h1>:<MovieLoaded movielst={movies}/>}
      {/* {loading ? <h1>Loading...</h1>:null} */}
    </div>
  );
}

export default App;


// fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
// .then((response) => response.json()) // 위 url에서 받아온 response 중 json을 뽑음 
// .then((json)=>{// 앞서 받아온 json file을 console.log함
// setLoading(false);
// setMovies(json.data.movies)


// fetch url: 미국꺼

// function MovieLoaded({movielst}){
//   return(
//     <div>
//         {movielst.map((movie)=>(
//         <div key={movie.id}>
//           <img src={movie.medium_cover_image} />
//           <h2>{movie.title}</h2>
//           <p>{movie.summary}</p>
//           <ul>
//             {movie.genres.map(g => <li key={g}>{g}</li>)}
//           </ul>
//         </div>))}
//       </div>
//   )
// }

// function App() {
//   const [loading,setLoading] = useState(true);
//   const [movies,setMovies] = useState([]);
//   //async: 비동기 함수임을 선언>promise 반환, await: promise가 처리될때까지 함수실행 중단,프로미스(Promise): JavaScript에서 비동기 작업의 최종 완료 또는 실패를 나타내는 객체
//   const getMovies = async() =>{
//     const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")).json();
//    // const json = await response.json();
//     setMovies(json.data.movies);
//     setLoading(false);  
//   }
//   useEffect(() => {getMovies()},[])
//   console.log(movies);
//   return (
//     <div>
//       {loading ? <h1>Loading...</h1>:<MovieLoaded movielst={movies}/>}
//     </div>
//   );
// }

//영화진흥협회 api key
// key=96cfdf307a75bb5b8da77ab382d03211