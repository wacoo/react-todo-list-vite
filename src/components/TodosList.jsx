import { React } from 'react';
import TodoItem  from './TodoItem.jsx';

console.log(1);
const TodosList = (props) => {
  const { todosProps, handleChange, delTodo } = props;
  console.log(todosProps);
  return (
    <div className='yyy'>
    <ul>
        {todosProps.map((todo) => (
          <TodoItem
          key={todo.id}
          itemProp = {todo}
          handleChange={handleChange}
          delTodo={delTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodosList;