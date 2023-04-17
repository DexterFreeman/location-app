import React, { useState } from 'react';
import './TodoList.scss'
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (!newTodo) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleTodoToggle = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleTodoDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className='Todolist'>
        <h2>Todo List</h2>
      <form onSubmit={handleNewTodoSubmit}>
        <input type="text" value={newTodo} onChange={handleNewTodoChange} className='Todolist__input'/>
        <button type="submit" className='Todolist__addbtn'>Add Todo</button>
      </form>
        <main className='Todolist__main'>
        {todos.map((todo) => (
          <div className='Todolist__container'>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleTodoToggle(todo.id)}
            />
            <span style={{ fontSize: '25px', textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button className='Todolist__btn' onClick={() => handleTodoDelete(todo.id)}>x</button>
            </div>
        ))}
        </main>
    </div>
  );
}

export default TodoList;