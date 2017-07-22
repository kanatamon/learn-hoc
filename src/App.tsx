import * as React from 'react';
import TodoList from './TodoList';

const TODOS = [
  { task: 'Clean up room!' },
  { task: 'Buy some food' },
  { task: 'Date with Nunan at 6 PM' },
  { task: 'Learn to fish stock' },
];

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <TodoList
          todos={TODOS}
        />
      </div>
    );
  }
}

export default App;
