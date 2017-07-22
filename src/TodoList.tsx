import * as React from 'react';
import { compose } from 'recompose';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Array<{ task: string }>;
  isLoading?: boolean;
}

const TodoList: React.StatelessComponent<TodoListProps> = ({ todos, isLoading }: TodoListProps) => {
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

function withCondition<P>(conditionFunction: Function, EitherComponent: Function) {
  return (Component: Function) => (props: P) => 
    conditionFunction(props)
    ? EitherComponent(props)
    : Component(props);
}

const EmptyTodosComponent = () => <div>You have no Todos.</div>;
const LoadingComponent = () => <div>Loading todos ...</div>;

const isEmptyTodos = ({ todos }: TodoListProps) => !todos.length;
const isLoadingTodos = ({ isLoading = false }: TodoListProps) => isLoading;

const withConditionalRendering = compose(
  withCondition<TodoListProps>(isEmptyTodos, EmptyTodosComponent),
  withCondition<TodoListProps>(isLoadingTodos, LoadingComponent),
);

export default withConditionalRendering(TodoList);