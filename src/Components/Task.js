import styled from "styled-components"
import { useState } from "react";
import Form from "../SubComponents/Form";
import TextArea from "../SubComponents/TextArea";
import PrimaryButton from "../SubComponents/PrimaryButton";
import SecondaryButton from "../SubComponents/SecondaryButton";
import { FiEdit2 } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";



const Display =styled.div`
background:#ffffff;
font-size:14px;
width:230px;
display:flex;
flex-flow:row wrap;
border: 2px solid transparent;
padding: 8px 12px 4px;
height:fit-content;
font-weight:400;
color:#172b4d;
border-radius:8px;
box-shadow: 0px 1px 1px #091e4240, 0px 0px 1px #091e424f;
font-family: 'Montserrat', sans-serif;
&:hover{
    border-color:#0c66e4
}
`;

function Task(props) {
    const [text,setText]=useState("");
    const {id,lists,globalcheck,setGlobalCheck,boardcheck,setBoardCheck,editTaskChecker,editTask,deleteTask}=props;
    const handleSubmit = (z,taskid)=>{
        z.preventDefault();
        if(text){
        editTask(text,parseFloat(taskid));
        }
        setText("");
      }
    

    const preview= lists.map((list)=>{
        if(list.listid===id){
            return list.tasks.map((task)=>{
                if(task.sourceid===id){
                    return <div key={task.taskid} id={task.taskid}>{task.editcheck&&!globalcheck&&!boardcheck ? <Form name="task-child" onSubmit={handleSubmit}>
                                                                    <TextArea defaultValue={task.content} autoFocus onBlur={()=>{task.editcheck=false}} onChange={(e)=>{if(e.target.value){setText(e.target.value)}}}/>
                                                                    <PrimaryButton type="submit" id={task.taskid} onClick={(z)=>{handleSubmit(z,z.target.id);setGlobalCheck(true)}}>Save</PrimaryButton>
                                                                  </Form>
                                                    :<Display>
                                                    <div style={{display:"flex",padding:"6px",gap:"2px",flexFlow:"column wrap"}}>
                                                        <p style={{display:"flex",width:"220px",height:"fit-content",overflowWrap:"anywhere",overflow:"hidden",margin:"0"}}>{task.content}</p>
                                                        <div style={{display:"flex",flexFlow:"row wrap",justifyContent:"flex-end",alignItems:"flex-end",paddingTop:"2px",gap:"2px"}}>   
                                                            <SecondaryButton name="task-child"  type="button" onClick={()=>{setGlobalCheck(false);setBoardCheck(false);editTaskChecker(task.taskid)}}><FiEdit2 /></SecondaryButton>
                                                            <SecondaryButton name="task-child"  type="button" onClick={()=>{deleteTask(id,task.taskid)}}><FaXmark /></SecondaryButton>
                                                        </div>  
                                                    </div>
                                                    </Display>
                                                    }</div>}else{return undefined}}
            )}else{return undefined};
});

    return (
        <>
         {preview}
        </>
    );
  }
  
  export default Task;