import TrelloSVGBasic from "../Assets/TrelloSVGBasic.svg"
import StyledNavLink from "../SubComponents/StyledNavLink"
import TrelloSVGCustom from "../Assets/TrelloSVGCustom.svg"

function NavBar (props){
    const {name} = props;
    return(
        <div style={{display:"flex",alignSelf:"flex-start",borderBottom:name==="intro-nav"||name==="not-found"?"solid #dadde2 1px":"solid #00849b 5px",width:"100%",justifyContent:"space-around",background:name==="intro-nav"||name==="not-found"?"#FFFFFF":"#0092ab"}}>
            <StyledNavLink to="/" name={name}>
                <img src={name==="intro-nav"||name==="not-found"?TrelloSVGBasic:TrelloSVGCustom} alt="Logo" style={{width:"80px",height:"20px",marginTop:"5px"}}/>
            </StyledNavLink>
            <StyledNavLink to="/workspace" name={name}>
             Workspace
            </StyledNavLink>
        </div>
    )
}
export default NavBar