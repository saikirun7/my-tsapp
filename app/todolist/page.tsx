"use client"
import { useState } from "react"


function Todolist() {
    console.log("Todolist");
    type Todo = {
        text: string,
        completed: boolean
    }

    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = ():void => {
        console.log("add Todo")
        const newTodo: Todo = {text: todo, completed: false};
        setTodos([...todos, newTodo]);
        setTodo("");
    }

    const deleteTodo = (i:number) => {
        console.log("delete Todo")
        const updated = [...todos];
        updated.splice(i,1);
        setTodos(updated);
    }

    const toggleStatus = (i:number) => {
        console.log("toggleStatus");
        const updated = [...todos];
        updated[i].completed = !updated[i].completed;
        setTodos(updated);
    }

    const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            console.log("Key Todo")
            addTodo();
        }
    }

  return (
    <div>
        <h1>Todolist</h1>
        <input type="text" value={todo} onChange={e=>setTodo(e.target.value)} onKeyDown={keyDown} />
        <button onClick={addTodo}>Add Todo</button>
        <br />
        <ul>
            {todos.map((t,i)=>(
                <li key={i} style={{textDecoration: t.completed ? "line-through": "none"}}>
                    {t.text}
                    <button onClick={()=>deleteTodo(i)}>Delete Todo</button>
                    <button onClick={()=>toggleStatus(i)}>
                        {t.completed ? "Not Completed": "Completed"}
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todolist