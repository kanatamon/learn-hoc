import * as React from 'react';
import TodoItem from './TodoItem';

interface Props {
  todos: Array<{ task: string }>;
}

function TodoList({ todos }: Props) {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {todos.map((todo, index) => <TodoItem key={index} task={todo.task}/>)}
    </div>
  );
}

export default TodoList;