import './App.css';
import { useEffect, useState } from "react";

function App() {
// -----------------------Initialisation de propriétés des Inputs childs(Items)----------------------------------------------
  const items = [
    { id: 1, value: "Item 1", isChecked: false },
    { id: 2, value: "Item 2", isChecked: false },
    { id: 3, value: "Item 3", isChecked: false },
    { id: 4, value: "Item 4", isChecked: false }
  ]
// -----------------------Initialisation de States des Parent(Select all) et childs(Items)-----------------------------------
  
  const[checkSelectall,setcheckSelectall]=useState(false);
  const[item,setItem]=useState(items);
  
// --------handleAllChecked est une function permet de modifier le statut de childs en basant sur le statut de Parent--------
  
  const handleAllChecked=(e)=> {
     const Items =  item.map(element => ({id:element.id,value:element.value,isChecked:e.target.checked}));
     setItem(Items);
     setcheckSelectall(true);
  }

// -------------handleChangeItem est une function permet de modifier le statut de chaque child en basant sur lui-même-------------------------------
  
  const handleChangeItem=(e)=>{
     const Items =  item.map(element => ({id:element.id,value:element.value,isChecked:element.isChecked}));
     Items[e.target.value-1]={id:e.target.value,value:Items[e.target.value-1].value,isChecked:e.target.checked}
     setItem(Items);
  }
 
// -------------useEffect est utilisé pour modifier le statut de Parent en basant sur le statut de childs--------------------

  useEffect(() => {  
    setcheckSelectall(true);
    for(var i=0;i<item.length;i++){
      if(item[i].isChecked===false){
        setcheckSelectall(false);
      }
    }
  },[item]);

  return (
    <div className="App">
      <form>
{/* --------------------------------------Parent(Select all)----------------------------------------------- */}
      <input  checked={checkSelectall} type="checkbox" onChange={handleAllChecked} value="checkedall" />
      <span>Select all </span>
{/* ----------------------------------------Childs(Items)-------------------------------------------------- */}
      <ul>
        {item.map(item => {
            return (  
                <li key={item.id}>
                   <input
                   key={item.id}
                   type="checkbox"
                   checked={item.isChecked}
                   value={item.id}
                   onChange={handleChangeItem}
                   />
                   <span>{item.value} </span>
                </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
}

export default App;
