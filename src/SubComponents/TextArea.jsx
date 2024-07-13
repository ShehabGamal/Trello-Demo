import styled from "styled-components";


const TextArea=styled.textarea`
display:flex;
background:#fffff;
outline:none;
border:none;
font-size:14px;
width:240px;
min-height:${(props)=>{return props.name==='card-child'?'40px':'20px'}};
margin:0;
max-height:256px;
resize:none;
field-sizing:content;
overflow-wrap:break-word;
overflow:hidden;
color:#172b4d;
padding:6px 12px;
box-shadow: inset 0 0 0 2px #091e4224;
font-weight:600;
border-radius:${(props)=>{return props.name==='card-child'?'12px':'4px'}};
&:focus{
    box-shadow: inset 0 0 0 2px #0288d1;
}
`;
export default TextArea