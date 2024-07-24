import styled from "styled-components";
import { Link } from "react-router-dom";



const StyledLink=styled(Link)`
text-decoration:none;
padding:15px;
border-radius:12px;
color:#ffffff;
background:#0c66e4;
&:hover{
    background:#0055CC;
}
`;
export default StyledLink;