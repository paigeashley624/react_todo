import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}) {

   return(
    <ul className="list">
    {todos.length === 0 && "Let's Add Some Todos"}
    {/* the above line is called short circuiting */}
    {todos.map (todo => {
      return (
        <TodoItem {...todo}
        // id={todo.id}
        // completed={todo.completed}
        // title={todo.title}
         key={todo.id}
         toggleTodo={toggleTodo}
         deleteTodo={deleteTodo}
         />
      )
    })}

  </ul>

   )
}