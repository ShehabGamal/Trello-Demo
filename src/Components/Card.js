import styled from "styled-components"
import { useState } from "react";
import Task from "./Task"
import Form from "../SubComponents/Form";
import TextArea from "../SubComponents/TextArea";
import PrimaryButton from "../SubComponents/PrimaryButton";
import SecondaryButton from "../SubComponents/SecondaryButton";
import { FiEdit2 } from "react-icons/fi";
import { CgMathPlus } from "react-icons/cg";
import { FaXmark } from "react-icons/fa6";





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
    const {lists,addChecker,focusChecker,addTask,globalcheck,setGlobalCheck,boardcheck,setBoardCheck,editTaskChecker,editTask,deleteList,editListTitle,deleteTask}=props;
    const handleSubmit = (z,listid)=>{
      z.preventDefault();
      addTask(content,listid);
      setGlobalCheck(false);
      setContent("");
    }
    const handleChange=(listid)=>{
      if(newTitle){
      editListTitle(newTitle,listid);
      setGlobalCheck(false);
      }
    }
  

    const preview= lists.map((list)=>{return <Body  key={list.listid}
                                                    id={list.listid}>
                                                    {list.focuscheck && !list.addcheck && !boardcheck && !globalcheck?
                                                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"6px 4px",flexFlow:"row wrap",gap:"4px"}}>
                                                    <TextArea type="text" 
                                                         defaultValue={list.title}
                                                         id={list.listid}
                                                         onChange={(z)=>{setNewTitle(z.target.value)}}
                                                         onBlur={()=>{focusChecker(list.listid)}}
                                                         name="card-child"
                                                         autoFocus                                                  
                                                         />
                                                    <PrimaryButton type="button" onClick={()=>{handleChange(list.listid);
                                                                                         setGlobalCheck(true);
                                                                                         setBoardCheck(false);list.focuscheck=false}}>Save</PrimaryButton>
                                                    </div>
                                                    :       
                                                    <div style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",padding:"4px",gap:"2px",flexFlow:"column wrap"}}>
                                                      <div style={{display:"flex",justifyContent:"flex-end",flexFlow:"row wrap",paddingTop:"2px",gap:"2px",alignSelf:"flex-end"}}>
                                                        <SecondaryButton type="button" name="card-child"  onClick={()=>{focusChecker(list.listid);setGlobalCheck(false)}}><FiEdit2 /></SecondaryButton>
                                                        <SecondaryButton type="button" name="card-child"  onClick={()=>{deleteList(list.listid)}}><FaXmark /></SecondaryButton>
                                                      </div>
                                                      <h2 style={{display:"flex",width:"220px",height:"fit-content",overflowWrap:"anywhere",overflow:"hidden",margin:"0",fontSize:"14px"}}>{list.title}</h2>
                                                    </div>
                                                    }
                                                    <Task id={list.listid}
                                                          lists={lists}
                                                          globalcheck={globalcheck}
                                                          setGlobalCheck={setGlobalCheck}
                                                          boardcheck={boardcheck}
                                                          setBoardCheck={setBoardCheck}
                                                          editTaskChecker={editTaskChecker} 
                                                          editTask={editTask}
                                                          deleteTask={deleteTask}
                                                          />
                                                    {list.addcheck && !list.focuscheck && !globalcheck && !boardcheck? 
                                                        <Form  name="card-child" onSubmit={handleSubmit}>
                                                           <TextArea type="text" 
                                                                     placeholder="Enter Your Task..."
                                                                     onChange={(e)=>{setContent(e.target.value)}}
                                                                     name="card-child"
                                                                     autoFocus
                                                                     />
                                                           <div style={{display:"flex",gap:"4px"}}>
                                                                <PrimaryButton type="submit"
                                                                      id={list.listid} 
                                                                      onClick={(z)=>{if(content){handleSubmit(z,list.listid)};
                                                                                      addChecker(list.listid);
                                                                                      setGlobalCheck(true);
                                                                                      setBoardCheck(false);}}>Add Task</PrimaryButton>
                                                                <SecondaryButton type="button"
                                                                      onClick={()=>{addChecker(list.listid);
                                                                                    setGlobalCheck(true);
                                                                                    setBoardCheck(false);}}
                                                                      name="cancel-add-task"><FaXmark /></SecondaryButton>
                                                            </div>
                                                          </Form>:
                                                          <SecondaryButton onClick={()=>{addChecker(list.listid);
                                                                                setGlobalCheck(false);
                                                                                setBoardCheck(false);
                                                                                }}
                                                                            name="add-task"><CgMathPlus style={{marginRight:"8px",fontSize:"18px"}}/>Add {list.tasks.length>0?"another":"a"} task</SecondaryButton>}
                                           </Body>})
    return (
        <>
          {preview}
        </>
    );
  }
  
  export default Card;