import {React, useState} from 'react';
import TodosList from './TodosList.jsx';
import InputTodo from './InputTodo.jsx';
import {v4 as uuidv4} from 'uuid';

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Setup development environment",
      completed: true,
    },
    {
      id: 2,
      title: "Develop website and add content",
      completed: false,
    },
    {
      id: 3,
      title: "Deploy to live server",
      completed: false,
    },
  ]);

  
  const handleChange = (id) => {
    setTodos((prev) => 
    prev.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
    );    
  };


  const delTodo = (id) => {
    setTodos([...todos.filter(todo => {
      return todo.id !== id;
    })]);
  }

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem}/>
      <TodosList
      todosProps={todos}
      handleChange={handleChange}
      delTodo={delTodo}
      />
    </div>
  );
};

export default TodosLogic;
