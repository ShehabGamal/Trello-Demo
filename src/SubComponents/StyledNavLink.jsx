import styled from "styled-components";
import { Link } from "react-router-dom";



const StyledNavLink=styled(Link)`
text-decoration:none;
padding:8px;
border-radius:3px;
color:${props=>props.name==="intro-nav"||props.name==="not-found"?"#455570":"#FFFFFF"};
background:${props=>props.name==="intro-nav"||props.name==="not-found"?"#FFFFFF":"#0092ab"};
font-size:18px;
font-weight:600;
line-height:32px;
white-space:nowrap;
&:hover{
    background:${props=>props.name==="intro-nav"||props.name==="not-found"?"#cfd8dc":"#1b9bb4"};
}
`;
export default StyledNavLink;