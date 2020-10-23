import React, { useCallback } from 'react';
import {useSelector} from 'react-redux';
import {changeInput, insert, toggle, remove} from '../modules/todos';
import Todos from '../components/Todos';
import {useActions} from '../lib/useActions';


const TodosContainer = () => {
    const {input, todos} = useSelector(state => state.todos);

    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
        [changeInput, insert, toggle, remove], // 액션 생성 함수 배열
        [] //deps
    )

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

// connect 함수가 자동으로 수행했던 최적화를 대신할 memo 함수가 필수이다.git 
export default React.memo(TodosContainer); 