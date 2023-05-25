import {PROFILE_IMAGE} from "../../api";


function SetActor({cast}){
    //console.log(actor.actor)
    const DEFAULT_IMAGE = 'https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Download-Image.png';//나중에 수정
    const imageUrl = cast.profile_path !== null ? `${PROFILE_IMAGE}${cast.profile_path}` : DEFAULT_IMAGE;
   
    return(
        <span style={{float:"left"}} id={cast.id}>
            <img src={imageUrl} alt="Profile" style={{ width: '185px', height: '278px' }} />
            <h3>{cast.original_name}<br/>{cast.character}</h3>        
        </span>
    );
}

function Profile({actors}){
    //console.log(actors)
    return(
        actors.map((actor) => <SetActor cast={actor} id={actor.id}/>)  
      
    );
}
export default Profile;