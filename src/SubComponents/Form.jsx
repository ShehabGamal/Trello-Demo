import styled from "styled-components";


const Form=styled.form`
display:flex;
justify-content:space-between;
align-items:flex-start;
flex-flow:column wrap;
padding:8px 4px;
gap:4px;
background: ${(props)=>{return props.name==='task-child' || props.name==='card-child' ?'transparent':'#ebecf0'}};
width:265px;
height:fit-content;
border-radius:12px;
font-family: 'Montserrat', sans-serif;
flex-shrink:0;
@media (max-width: 600px) {
       width:275px;
    }
`;

export default Form;