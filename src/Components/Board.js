import styled from 'styled-components'
import Card from './Card'
import { useState } from 'react';
import Form from'../SubComponents/Form.jsx'
import PrimaryButton from '../SubComponents/PrimaryButton.jsx';
import SecondaryButton from '../SubComponents/SecondaryButton.jsx';
import TextArea from '../SubComponents/TextArea.jsx';
import CreateList from '../SubComponents/CreatelistButton.jsx';
import { CgMathPlus } from "react-icons/cg";
import { FaXmark } from "react-icons/fa6";


const Body=styled.div`
display:inline-flex;
justify-content:flex-start;
flex-flow:row nowrap;
gap:0.5rem;
min-height: calc( 100vh - 0.4rem );
min-width: calc( 100vw - 0.4rem );
align-content:start;
padding:0.2rem;
background-image: linear-gradient(270deg, black , grey);
font-family: 'Montserrat', sans-serif;
flex-shrink:0;
scroll-behavior: smooth;
`;

function Board(props) {
    const [boardcheck,setBoardCheck] = useState(false);
    const [globalcheck,setGlobalCheck]=useState(true);
    const [text,setText]= useState("");
    const {lists,addList,addChecker,focusChecker,addTask,editTaskChecker,editTask,deleteList,editListTitle,deleteTask,resetList,swapList} = props;
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(text){
        addList(text);
        setText("");
        }
    }
    return (
        <Body>
            {lists.length>0?lists.map((list,index)=>{return <Card lists={lists}
                                  focusChecker={focusChecker}
                                  addChecker={addChecker} 
                                  addTask={addTask} 
                                  globalcheck={globalcheck} 
                                  setGlobalCheck={setGlobalCheck} 
                                  boardcheck={boardcheck}
                                  setBoardCheck={setBoardCheck}
                                  editTaskChecker={editTaskChecker}
                                  editTask={editTask}
                                  deleteList={deleteList}
                                  editListTitle={editListTitle}
                                  deleteTask={deleteTask}
                                  cardid={list.listid}
                                  cardindex={index}
                                  focuscheck={list.focuscheck}
                                  addcheck={list.addcheck}
                                  title={list.title}
                                  tasks={list.tasks}
                                  key={list.listid}
                                  resetList={resetList}
                                  swapList={swapList}
                                  />}):""}
            {boardcheck&&globalcheck?
                    <Form onSubmit={handleSubmit} >
                        <TextArea type="text"  placeholder="Enter List Name..." dir="auto" maxLength="512" onChange={(e)=>{setText(e.target.value)}} autoFocus/>
                        <div style={{display:"flex",gap:"4px"}}>
                        <PrimaryButton type="submit" onClick={(e)=>{if(text){handleSubmit(e);setBoardCheck(false)};setGlobalCheck(false);lists.map((list)=>{return list.addcheck=false;});}}>Add List</PrimaryButton>
                        <SecondaryButton type="button" onClick={()=>{setBoardCheck(false);setGlobalCheck(true);}}><FaXmark /></SecondaryButton>
                        </div>
                    </Form>
                :
                <CreateList onClick={()=>{setBoardCheck(true);
                                          setGlobalCheck(true);
                                          }}><span style={{marginRight:"8px",fontSize:"20px"}}><CgMathPlus />
                                          </span>Add {lists.length>0?"another":"a"} list</CreateList>}
        </Body>
    );
  }
  
  export default Board;