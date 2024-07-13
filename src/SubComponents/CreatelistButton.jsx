import styled from "styled-components";

const CreateList = styled.button`
background:#ffffff3d;
color:#ffffff;
width:272px;
height:50px;
font-size:18px;
display:flex;
justify-content:flex-start;
font-family: 'Montserrat', sans-serif;
align-items:center;
border-radius:12px;
padding:12px;
font-weight:500;
line-height:20px;
border:none;
&:hover{
    background:#A6C5E229;
}
flex-shrink:0;
@media (max-width: 600px) {
       width:282px;
    }
`
export default CreateList;