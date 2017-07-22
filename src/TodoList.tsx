import * as React from 'react';
import TodoItem from './TodoItem';

interface Props {
  todos: Array<{ task: string }>;
  isLoading?: boolean;
}

function TodoList({ todos, isLoading = false }: Props) {
  if (isLoading) {
    return (
      <div>Loading todos ...</div>
    );
  }

  if (!todos.length) {
    return (
      <div>You have no Todos.</div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {todos.map((todo, index) => <TodoItem key={index} task={todo.task} />)}
    </div>
  );
}

export default TodoList;