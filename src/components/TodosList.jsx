import { React } from 'react';
import TodoItem  from './TodoItem.jsx';

console.log(1);
const TodosList = (props) => {
  const { todosProps, handleChange, delTodo } = props;
  console.log(todosProps);
  return (
    <ul>
        {todosProps.map((todo) => (
          <TodoItem
          key={todo.id}
          itemProp = {todo}
          handleChange={handleChange}
          delTodo={delTodo} />
        ))}
      </ul>
  );
}

export default TodosList;