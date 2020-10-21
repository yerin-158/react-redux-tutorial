import React, { useCallback } from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import Todos from '../components/Todos';
import {changeInput, insert, toggle, remove} from '../modules/todos';

const TodosContainer = () => {
    const {input, todos} = useSelector(state => state.todos);

    const dispatch = useDispatch();
    const onChangeInput = useCallback(input=>dispatch(changeInput(input)), [dispatch]);
    const onInsert = useCallback(todo=>dispatch(insert(todo)), [dispatch]);
    const onToggle = useCallback(id=>dispatch(toggle(id)), [dispatch]);
    const onRemove = useCallback(id=>dispatch(remove(id)), [dispatch]);

    console.log(todos);

    return (
        <Todos 
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};


export default TodosContainer;