import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import {useState} from "react";
import Welcome from "./components/Welcome";


function App() {
  /*const todoItemss=[
    {
      name: "Buy Milk",
      dueDate: "04/05/2024"
    },
    {
      name: "Go to School",
      dueDate: "06/04/2024"
    }
  ]*/

const [todoItems,setItems] = useState([]);

const handleNewItem =(itemName, itemDueDate)=>{
  
const newTodoItem =[...todoItems, {name:itemName, date: itemDueDate}]
setItems(newTodoItem);
}
const handleDeleteItem =(todoItemName)=>{
  console.log(todoItemName);
  const newTodoItem = todoItems.filter(item=>item.name!== todoItemName);
  setItems(newTodoItem);
}


  return (
    <center className="todo-container">
      <AppName/>
      {todoItems.length===0 && <Welcome></Welcome>}
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      <TodoItems todoItems={todoItems} onDeletedClick={handleDeleteItem}></TodoItems>
    </center>
  );
}
export default App;