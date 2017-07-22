import * as React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../TodoList';
import TodoItem from '../TodoItem';

describe('TodoList Component', () => {
  test('should render TodoItem for length of the given array', () => {
    const todos = [{ task: 'Clean up room'}];
    const todoList = shallow(
      <TodoList todos={todos}/>
    );
    expect(todoList.find(TodoItem).length).toBe(todos.length);
  });  
});
