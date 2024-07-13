
//import { useState } from 'react';
import Board from './Components/Board';
import useLocalStorage from './Local Storage Hook/LocalStorage';

function App() {
  //const [lists,setLists]=useState([]);
  const [lists,setLists]=useLocalStorage([],"trello-demo")


  const addList = (title) => {
    const newList = {listid:Math.random()*4,title,focuscheck:false,addcheck:false,tasks:[]};
    setLists([...lists,newList]);
  };
  
  const deleteList = (listid) => {
    const updateList = lists.filter((list)=>{return list.listid !== listid});
    setLists(updateList);
  };

  const editListTitle = (newTitle,listid) => {
    const updateList = lists.map((list)=>{
      if(list.listid===listid){
        list.title=newTitle
      }
      return list
    });
    setLists([...updateList]);
  };
  
  const addChecker=(listid)=>{
    const updateList =lists.map((list)=>{
      if(list.listid===listid){
        list.addcheck=true;
        list.focuscheck=false;
        list.tasks.map((task)=>{task.editcheck=false;return task})
            }else{
              list.addcheck=false;
              list.focuscheck=false;
              list.tasks.map((task)=>{task.editcheck=false;return task})
            }    
      return list;
    })
    setLists([...updateList]);
  };


  const focusChecker=(listid)=>{
    const updateList =lists.map((list)=>{
      if(list.listid===listid){
      list.focuscheck=true;
      list.addcheck=false;
      list.tasks.map((task)=>{task.editcheck=false ; return task})
      }else{
        list.focuscheck=false;
        list.addcheck=false;
        list.tasks.map((task)=>{task.editcheck=false ; return task})
      }   
      return list;
    })
    setLists([...updateList]);
  };


  const addTask = (content,listid)=>{
    const newTask={taskid:Math.random()*4,sourceid:listid,content,editcheck:false};
    const updateList =lists.map((list)=>{
      if(list.listid === listid && content){
        list.tasks.push(newTask);
      }
      return list
    })
    setLists([...updateList]);
  };
  
  
const editTaskChecker=(taskid)=>{
  const updateList =lists.map((list)=>{
    list.focuscheck=false;
    list.addcheck=false;
    list.tasks.map((task)=>{
      if(taskid===task.taskid){
        task.editcheck=true;
      }else{
        task.editcheck=false;
      }
      return task;
    })  
    return list;
  })
  setLists([...updateList]);
}

  const editTask = (text,taskid)=>{
    const updateList =lists.map((list)=>{
        list.tasks.map((task)=>{
          if(task.taskid===taskid){
            task.content=text;
          }
          return task
        })
    return list;
    })
    setLists([...updateList]);
  };

  

  const deleteTask = (listid,taskid) => {
    const updateList = lists.map((list)=>{
      if(list.listid===listid){
        const tasks =list.tasks.filter((task)=>{
          return task.taskid!==taskid
        })
        list.tasks=tasks;
      }
      return list
        });
  setLists(updateList);
};

  return (
    <Board lists={lists}
           addList={addList}
           addChecker={addChecker}
           focusChecker={focusChecker}
           addTask={addTask}
           editTaskChecker={editTaskChecker}
           editTask={editTask}
           deleteList={deleteList}
           editListTitle={editListTitle}
           deleteTask={deleteTask}
           />
  );
}

export default App;
