import {PROFILE_IMAGE} from "../../api";
import styled from "styled-components";

function SetActor({cast}){
    //console.log(actor.actor)
    const DEFAULT_IMAGE = 'https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Download-Image.png';//나중에 수정
    const imageUrl = cast.profile_path !== null ? `${PROFILE_IMAGE}${cast.profile_path}` : DEFAULT_IMAGE;
   
    return(
        <CastList id={cast.id}>
            <img src={imageUrl} alt="Profile" style={{ width: '185px', height: '278px' }} />
            <h3>{cast.original_name}<br/>{cast.character}</h3>        
        </CastList>
    );
}

function Profile({actors}){
    //console.log(actors)
    const castTop10 = actors.slice(0,10);
    return(
        <CastWrap>
            {castTop10.map((actor) => <SetActor cast={actor} id={actor.id}/>) } 
        </CastWrap>
    );
}
export default Profile;

const CastWrap = styled.div`
    width: 740px; /*자식요소와 크기를 동일하게 고정시켜야함*/
    height: 320px;
    position:relative;
    transform-style: preserve-3d; /*자식 요소들에 대한 3D 변환 동작을 정의*

    overflow-x:scroll;
    top: 21%;

    display: flex;
    justify-content:center;
    align-items:center;

`;

const CastList = styled.span`

    float:left;
    width: 185px;
    height: 320px;
   
   
    font-size: 15px;
    color: white;
    border: 2px solid white;

    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
`