import NavBar from "./NavBar"

function Notfound (){
    return(
        <>
                <NavBar name="not-found"/>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"column wrap",padding:"5px"}}>
                    <h1 style={{color:"#626f86"}}>Malformed URL</h1>
                    <p style={{fontSize:"18px",lineHeight:"22px",color:"#626f86"}}>The link you entered does not look like a valid Trello link. If someone gave you this link,
                    <br/> you may need to ask them to check that it's correct.</p>
                 </div>
        </>
    )
}
export default Notfound