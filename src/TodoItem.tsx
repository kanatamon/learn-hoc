import * as React from 'react';

interface Props {
  task: string;
}

function TodoItem({ task }: Props) {
  return (
    <span>
      {task}
    </span>
  );
} 

export default TodoItem;