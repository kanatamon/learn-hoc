import * as React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../TodoList';
import TodoItem from '../TodoItem';

describe('TodoList Component', () => {
  test('should render TodoItem for length of the given array', () => {
    const todos = [{ task: 'Clean up room' }];
    const todoList = shallow(
      <TodoList todos={todos} />
    );
    expect(todoList.find(TodoItem).length).toBe(todos.length);
  });

  test('should render a Message when the length of the given array is 0', () => {
    const todos: Array<{ task: string }> = [];
    const todoList = shallow(
      <TodoList todos={todos} />
    );
    expect(todoList.text()).toBe('You have no Todos.');
  });

  test('should render a message indicating loading state when the props.isLoading is true', () => {
    const todos = [{ task: 'Clean up room' }];
    const todoList = shallow(
      <TodoList todos={todos} isLoading={true} />
    );
    expect(todoList.text()).toBe('Loading todos ...');
  });
});
