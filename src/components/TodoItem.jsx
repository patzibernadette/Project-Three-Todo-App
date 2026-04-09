function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="card p-2 my-2 d-flex justify-content-between">

      
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
        {todo.text}
      </span>

      
      <button onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>

    </div>
  );
}

export default TodoItem;