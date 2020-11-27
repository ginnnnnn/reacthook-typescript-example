import React, { useRef } from 'react';

interface NewTodoProps {
  setAddTodoHandler: (todo: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ setAddTodoHandler }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const addTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const todoText = inputRef.current!.value;
    inputRef.current!.value = '';
    setAddTodoHandler(todoText);
  };
  return (
    <form>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={inputRef} />
      </div>
      <button type="submit" onClick={addTodoHandler}>
        ADD TODO
      </button>
    </form>
  );
};

export default NewTodo;
