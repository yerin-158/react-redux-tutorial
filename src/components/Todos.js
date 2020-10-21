import React from 'react';

const TodoItem = ({todo, onToggle, onRemove}) => {
    return (
        <div>
            <input 
                type="checkbox"
                onClick={()=>onToggle(todo.id)}
                checked={todo.done}
                readOnly={true}
            />
            <span style={{textDecoration: todo.done ? 'line-through' : 'none'}}>{todo.text}</span>
            <button
                onClick={()=>onRemove(todo.id)}
            >삭제</button>
        </div>
    );
}

const Todos = props => {
   const {
        input,
        todos,
        onChangeInput,
        onInsert,
        onToggle,
        onRemove,
    } = props;

    const onSubmit = e => {
        e.preventDefault();
        onInsert(input);
        onChangeInput('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    value={input}
                    onChange={e => onChangeInput(e.target.value)}
                />
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map(todo => <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove}/>)}
            </div>
        </div>
    )
};

export default Todos;