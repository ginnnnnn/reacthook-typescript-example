import React from 'react';
import { TodoType } from '../App';

interface TodoListProps {
  items: TodoType[];
}

const TodoList: React.FC<TodoListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((info) => (
        <li key={info.id}>{info.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
