import Header from './Header.jsx';
import TodosLogic from './TodosLogic.jsx';

const TodoApp = () => {
    return (
      <div className="wrapper">
        <div className="todos">
          <Header />
          <TodosLogic />
        </div>
      </div>
    );
  };
  export default TodoApp;