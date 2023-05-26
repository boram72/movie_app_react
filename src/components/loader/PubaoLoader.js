import styled from "styled-components";
import PubaoLoadingGIF from "../../imgsrc/pubao_aibao.gif"
import BambooField from "../../imgsrc/bamboo_field.jpg"

function PubaoLoader(){
    return(
        <Loader>
            <img src={PubaoLoadingGIF} alt="Loading..." />
            <H1style>잠시만 기다려주세용</H1style>
        </Loader>
    )
    
}

export default PubaoLoader;

const Loader = styled.div`
    width: 100vw;
    height: 100vh;
    top: 30%;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;


    background-image:url(${BambooField});
    background-size: cover,
    background-repeat: no-repeat,
    background-position: center center,

`;

const H1style = styled.h1`
    color: white;
    border-radius: 20px;
    background-color: rgb(26, 183, 26,0.5);
`