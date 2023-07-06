import React,{useState} from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoArray, setTodoArray] = useState([]);

  console.log(todo);
  console.log(todoArray);

  function addToDo(e){
    e.preventDefault();
    setTodoArray([...todoArray, todo])
    setTodo("");

  }

  function deleteTodo (item){
        setTodoArray(todoArray.filter((todo) => todo !== item))
  }


  return(
    <div>
              <form>
                     <input type="text" placeholder="Enter your todo"
                      onChange={e => setTodo(e.target.value)}
                      value={todo}
                     />
                      <button type="submit" onClick={addToDo}>Add</button>
              </form>
              <ul> 
                  {
                    todoArray.length >0 && (
                      todoArray.map((item) => (
                           <li>
                              <span>{item}</span>
                              <button onClick={()=>deleteTodo(item)}>Delete</button>
                           </li>
                      ))
                    )
                  }

              </ul>
    </div>
  )
}

export default App;