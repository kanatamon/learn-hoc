import * as React from 'react';
import TodoItem from './TodoItem';

interface Props {
  todos: Array<{ task: string }>;
  isLoading?: boolean;
}

const TodoList: React.StatelessComponent<Props> = ({ todos, isLoading }: Props) => {
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

function withLoading(Component: React.StatelessComponent<Props>) {
  return (props: Props) => {
    if (props.isLoading) {
      return (
        <div>Loading todos ...</div>
      );
    }

    return Component(props);
  };
}

export default withLoading(withEmpty(TodoList));