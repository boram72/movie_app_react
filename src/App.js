import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import { HashRouter, Route } from "react-router-dom";
import Home from './route/Home';
import Detail from './route/Detail';
function App() {
  return(
    <Router>
      <Switch>
        <Route path="/detail/:movieId" component={Detail}><Detail /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </Router>
  )
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