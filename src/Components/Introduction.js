import styled from "styled-components";
import TrelloLogo from "../Assets/TrelloLogo.png";
import StyledLink from "../SubComponents/StyledLink";
import NavBar from "./NavBar";

const Body=styled.div`
display:inline-flex;
justify-content:flex-start;
align-items:flex-start;
flex-flow:column nowrap;
gap:0.5rem;
min-height: calc( 100vh - 0.4rem );
min-width: calc( 100vw - 0.4rem );
padding:0.2rem;
background:#ffffff;
font-family: 'Montserrat', sans-serif;
flex-shrink:0;
`;


function Introduction (){
    return(
        <Body>
            <NavBar name="intro-nav"/>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",flexFlow:"column wrap",marginTop:"70px"}}>
                <img src={TrelloLogo} alt="Trello-Logo" style={{display:"flex",width:"200px",height:"200px"}}/>
                <div style={{display:"flex",width:"350px",flexFlow:"column wrap",justifyContent:"center",alignItems:"center"}}>
                    <h1 style={{display:"flex",fontSize:"18px",justifyContent:"center",alignItems:"center",flexFlow:"column wrap",color:"#455570"}}><span>Welcome to my Trello-Demo!</span>
                    <br/>" Trello-Demo is coded to show-off my coding skills and abilites in using technologies and related libraries to bring live projects ! "  
                    <br/>
                    <br/>Developed by : Shehab Gamal
                    </h1>
                    <StyledLink to="/workspace"> Go to Workspace</StyledLink>
                </div>
            </div>
        </Body>
    )
}
export default Introduction