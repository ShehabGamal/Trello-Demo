import styled from "styled-components"
import { useRef, useState } from "react";
import Task from "./Task"
import Form from "../SubComponents/Form";
import TextArea from "../SubComponents/TextArea";
import PrimaryButton from "../SubComponents/PrimaryButton";
import SecondaryButton from "../SubComponents/SecondaryButton";
import { FiEdit2 } from "react-icons/fi";
import { CgMathPlus } from "react-icons/cg";
import { FaXmark } from "react-icons/fa6";
import { useDrag,useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";




const Body=styled.div`
display:flex;
align-items:center;
flex-flow:column wrap;
width:272px;
justify-content:space-between;
gap:10px;
padding-bottom:8px;
font-size:14px;
color:#424242;
background:#f5f5f5;
height:fit-content;
border-radius:12px;
font-family: 'Montserrat', sans-serif;
box-shadow:0px 1px 1px #091e4240, 0px 0px 1px #091e424f;
flex-shrink:0;
@media (max-width: 600px) {
       width:282px;
    }
`;


function Card(props) {
    const [content,setContent]=useState("");
    const [newTitle,setNewTitle]=useState("");
    const {addChecker,focusChecker,addTask,globalcheck,setGlobalCheck,boardcheck,setBoardCheck,editTaskChecker,editTask,deleteList,editListTitle,deleteTask,cardid,cardindex,focuscheck,addcheck,title,tasks,resetList,swapList,resetTask,swapTask,bringTask,taskslength}=props;
   
    const cardRef=useRef(null);


    const handleSubmit = (z,cardid)=>{
      z.preventDefault();
      addTask(content,cardid);
      addChecker(cardid);
      setGlobalCheck(true);
      setBoardCheck(false);
      setContent("");
    }
    const handleChange=(cardid)=>{
      if(newTitle){
      editListTitle(newTitle,cardid);
      setGlobalCheck(true);
      setBoardCheck(false);
      resetList(cardid)
      }
    }
    const [,drop]=useDrop({
      accept:[ItemTypes.CARD,ItemTypes.TASK],
      hover(item){
        if(item.cardindex!==cardindex && item.type===ItemTypes.CARD){
          swapList(cardindex,item.cardid);
          item.cardindex=cardindex;
        }else if (item.sourceid!==cardid&&item.type===ItemTypes.TASK&&taskslength===0){
          bringTask(cardindex,cardid,item.sourceid,item.id,item.taskindex)
          item.sourceid=cardid
          
        }
      },
    })

    const [{isDragging},drag]=useDrag({
      type:ItemTypes.CARD,
      item:{cardid,cardindex,type:ItemTypes.CARD},
      collect:(monitor)=>({
        isDragging:!!monitor.isDragging()})
    })
    
   

      drag(drop(cardRef));
    const preview = <Body  
                           id={cardid}
                           ref={cardRef}
                           style={{opacity:isDragging?0.5:1}}
                           >

                         {focuscheck && !addcheck && !boardcheck && !globalcheck?
                         <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"6px 4px",flexFlow:"row wrap",gap:"4px"}}>
                             <TextArea type="text" 
                               defaultValue={title}
                               id={cardid}
                               onChange={(z)=>{setNewTitle(z.target.value)}}
                               onBlur={()=>{focusChecker(cardid)}}
                               name="card-child"
                               onKeyDown={(e)=>{if(e.code==="Enter"){handleChange(cardid)}}}
                               autoFocus                                                  
                              />
                              <PrimaryButton type="button" onClick={()=>{handleChange(cardid);}}>Save</PrimaryButton>
                          </div>
                          :       
                          <div style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",padding:"4px",gap:"2px",flexFlow:"column wrap"}}>
                                <div style={{display:"flex",justifyContent:"flex-end",flexFlow:"row wrap",paddingTop:"2px",gap:"2px",alignSelf:"flex-end"}}>
                                  <SecondaryButton type="button" name="card-child"  onClick={()=>{focusChecker(cardid);setGlobalCheck(false)}}><FiEdit2 /></SecondaryButton>
                                  <SecondaryButton type="button" name="card-child"  onClick={()=>{deleteList(cardid)}}><FaXmark /></SecondaryButton>
                                </div>
                                <h2 style={{display:"flex",width:"220px",height:"fit-content",overflowWrap:"anywhere",overflow:"hidden",margin:"0",fontSize:"14px"}}>{title}</h2>
                          </div>
                          }
                          {tasks.map((task,index)=>{return <Task id={task.taskid}
                                taskindex={index}
                                key={task.taskid}
                                content={task.content}
                                editcheck={task.editcheck}
                                sourceid={cardid}
                                globalcheck={globalcheck}
                                setGlobalCheck={setGlobalCheck}
                                boardcheck={boardcheck}
                                setBoardCheck={setBoardCheck}
                                editTaskChecker={editTaskChecker} 
                                editTask={editTask}
                                deleteTask={deleteTask}
                                resetTask={resetTask}
                                swapTask={swapTask}
                                cardindex={cardindex}
                                />
                        })
                        }
                          {addcheck && !focuscheck && !globalcheck && !boardcheck? 
                              <Form  name="card-child" onSubmit={handleSubmit}>
                                  <TextArea type="text" 
                                            placeholder="Enter Your Task..."
                                            onChange={(e)=>{setContent(e.target.value)}}
                                            onKeyDown={(e)=>{if(e.code==="Enter"&&content){handleSubmit(e,cardid)}}}
                                            name="card-child"
                                            autoFocus
                                            />
                                  <div style={{display:"flex",gap:"4px"}}>
                                      <PrimaryButton type="submit"
                                            id={cardid} 
                                            onClick={(z)=>{if(content){handleSubmit(z,cardid)};}}>Add Task</PrimaryButton>
                                      <SecondaryButton type="button"
                                            onClick={()=>{addChecker(cardid);
                                                          setGlobalCheck(true);
                                                          setBoardCheck(false);}}
                                            name="cancel-add-task"><FaXmark /></SecondaryButton>
                                  </div>
                                </Form>
                                :
                                <SecondaryButton onClick={()=>{addChecker(cardid);
                                                      setGlobalCheck(false);
                                                      setBoardCheck(false);
                                                      }}
                                                  name="add-task"><CgMathPlus style={{marginRight:"8px",fontSize:"18px"}}/>Add {tasks.length>0?"another":"a"} task</SecondaryButton>}
                            </Body>;
    return (
        <>
          {preview}
        </>
    );
    
  }
  
  
  export default Card;