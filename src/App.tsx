import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

export interface TodoType {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const setAddTodoHandler = (todo: string): void => {
    const todoObj = {
      id: `t${todos.length + 1}`,
      text: todo,
    };
    setTodos([...todos, todoObj]);
  };
  return (
    <div>
      <NewTodo setAddTodoHandler={setAddTodoHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
