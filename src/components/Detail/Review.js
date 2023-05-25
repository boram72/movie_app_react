
function SetReview({review}){
    return(
        <li style={{color:"white"}}>
            <strong>{review.author}</strong>
            ({review.updated_at.slice(0, 10)})<br/>
            {review.content}
        </li>
    );
}

// https://api.themoviedb.org/3/movie/502356/reviews?api_key=c8d25a0e368c2fa300db030d25d976a2
function Review(reviews){
    const reviewList = reviews.reviews;
    //console.log(reviewList);
    
    return(
        <ul>
            {reviewList.map((review,idx)=><SetReview id={idx} review={review}/>)}
        </ul>
    )
}

export default Review;


// 영화 상세 정보:

// movie/{movie_id}: 특정 영화의 상세 정보를 가져옵니다.
// movie/{movie_id}/credits: 특정 영화의 출연진 정보를 가져옵니다.
// movie/{movie_id}/reviews: 특정 영화의 리뷰 정보를 가져옵니다.
// movie/{movie_id}/videos: 특정 영화의 비디오 정보를 가져옵니다. >> 유튜브 API 필요함
// 영화 목록:

// movie/popular: 인기 있는 영화 목록을 가져옵니다.
// movie/top_rated: 평점이 높은 영화 목록을 가져옵니다.
// movie/now_playing: 현재 상영 중인 영화 목록을 가져옵니다.
// movie/upcoming: 개봉 예정인 영화 목록을 가져옵니다.
// 영화 검색:

// search/movie: 특정 조건에 맞는 영화를 검색합니다.
// 이미지:

// movie/{movie_id}/images: 특정 영화의 이미지 정보를 가져옵니다.