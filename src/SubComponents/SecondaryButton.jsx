import styled from 'styled-components'
import PrimaryButton from './PrimaryButton';


const SecondaryButton=styled(PrimaryButton)`
background:transparent;
display:flex;
justify-content:${(props)=>{return props.name==='add-task'?'flex-start':'center'}};
align-items:center;
color:#172B4D;
padding:6px;
font-size:${(props)=>{return props.name==='cancel-add-task'?"18px":"inherit"}};
width:${(props)=>{return props.name==='add-task'?"95%":"auto"}};
border-radius:${(props)=>{return props.name ==='task-child'?'50%':props.name==='add-task'|| props.name==='card-child'?'8px':'3px'}};
&:hover{
    background:${(props)=>{return props.name==='task-child'? '#f3f3fd':'#cfd8dc'}};
}
`;

export default SecondaryButton;