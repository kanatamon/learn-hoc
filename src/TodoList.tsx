import * as React from 'react';

interface Props {
  todos: Array<{ task: string }>;
}

function TodoList({ todos }: Props) {
  return (
    <div>
      {todos.map(todo => <div>{todo.task}</div>)}
    </div>
  );
}

export default TodoList;