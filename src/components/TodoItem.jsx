import InputTodo from './InputTodo.jsx';

const TodoItem = (props) => {
    const {itemProp, handleChange, delTodo} = props;
    return (
        <li>
            <input
            type="checkbox"
            checked={itemProp.completed}
            onChange={() => handleChange(itemProp.id)}/>
            <button onClick={() => delTodo(itemProp.id)}>Delete</button>
            {itemProp.title}
        </li>        
    );
}

export default TodoItem;