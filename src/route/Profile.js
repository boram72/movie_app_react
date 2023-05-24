import {PROFILE_IMAGE} from "../api";

function SetActor(actor){
    return(
        console.log("actor")
        //console.log(`${PROFILE_IMAGE}${actor.profile_path}`)
        // <span>
        //     <img src={`${PROFILE_IMAGE}${actor.profile_path}`}/>
        //     <h3>{actor.original_name}<br/>{actor.character}</h3>
            
        // </span>
    );
}

function Profile(actors){
    //console.log(actors)
    const actorList = actors.actors;
    console.log(actorList[0]);
    return(
        actorList.map((actor) => <SetActor actor={actor}/>)
    );
}
export default Profile;