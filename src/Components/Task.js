import styled from "styled-components"
import { useState,useRef } from "react";
import Form from "../SubComponents/Form";
import TextArea from "../SubComponents/TextArea";
import PrimaryButton from "../SubComponents/PrimaryButton";
import SecondaryButton from "../SubComponents/SecondaryButton";
import { FiEdit2 } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import {useDrag,useDrop} from "react-dnd"
import { ItemTypes } from "./ItemTypes";



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
    const {id,content,editcheck,sourceid,globalcheck,setGlobalCheck,boardcheck,setBoardCheck,editTaskChecker,editTask,deleteTask,resetTask,taskindex,swapTask,cardindex}=props;
    const taskRef=useRef(null)

    const handleSubmit = (z,taskid)=>{
        z.preventDefault();
        if(text){
        editTask(text,parseFloat(taskid));  
        }
        setText("");
      }
    
      const [, drop] = useDrop({
        accept: ItemTypes.TASK,
        hover(item) {
          if(item.id!==id){
            swapTask(taskindex,item.sourceid,item.id,cardindex)
            item.taskindex=taskindex
            item.sourceid=sourceid
            
          }
        },
      });
    
      const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.TASK,
        item: { id, taskindex ,sourceid,type:ItemTypes.TASK},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      });
    
      drag(drop(taskRef));
      
    const preview=<div key={id} id={id} ref={taskRef} style={{opacity:isDragging?0.5:1}}>{editcheck&&!globalcheck&&!boardcheck ? <Form name="task-child" onSubmit={handleSubmit}>
                                                                    <TextArea defaultValue={content} autoFocus onBlur={()=>{resetTask(sourceid,id)}} onChange={(e)=>{if(e.target.value){setText(e.target.value)}}}/>
                                                                    <PrimaryButton type="submit" onClick={(z)=>{handleSubmit(z,id);setGlobalCheck(true)}}>Save</PrimaryButton>
                                                                  </Form>
                                                    :<Display>
                                                    <div style={{display:"flex",padding:"6px",gap:"2px",flexFlow:"column wrap"}}>
                                                        <p style={{display:"flex",width:"220px",height:"fit-content",overflowWrap:"anywhere",overflow:"hidden",margin:"0"}}>{content}</p>
                                                        <div style={{display:"flex",flexFlow:"row wrap",justifyContent:"flex-end",alignItems:"flex-end",paddingTop:"2px",gap:"2px"}}>   
                                                            <SecondaryButton name="task-child"  type="button" onClick={()=>{setGlobalCheck(false);setBoardCheck(false);editTaskChecker(id)}}><FiEdit2 /></SecondaryButton>
                                                            <SecondaryButton name="task-child"  type="button" onClick={()=>{deleteTask(sourceid,id)}}><FaXmark /></SecondaryButton>
                                                        </div>  
                                                    </div>
                                                    </Display>
                                                    }</div>

    return (
        <>
         {preview}
        </>
    );
  }
  
  export default Task;