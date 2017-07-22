import * as React from 'react';
import TodoItem from './TodoItem';

interface Props {
  todos: Array<{ task: string }>;
  isLoading?: boolean;
}

const TodoList: React.StatelessComponent<Props> = ({ todos, isLoading }: Props) => {
  if (isLoading) {
    return (
      <div>Loading todos ...</div>
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
};

function withEmpty(Component: React.StatelessComponent<Props>) {
  return (props: Props) => {
    if (!props.todos.length) {
      return (
        <div>You have no Todos.</div>
      );
    }

    return Component(props);
  };
}

export default withEmpty(TodoList);