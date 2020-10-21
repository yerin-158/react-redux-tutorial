import React from 'react';
import {connect} from 'react-redux';
import Todos from '../components/Todos';
import {changeInput, insert, toggle, remove} from '../modules/todos';

const TodosContainer = props => {
    const {
        input,
        todos,
        changeInput,
        insert,
        toggle,
        remove
    } = props;

    return (
        <Todos 
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
    );
};

const mapStateToProps = state => ({
    input: state.todos.input,
    todos: state.todos.todos
})


export default connect(
    mapStateToProps,
    {changeInput, insert, toggle, remove}
)(TodosContainer);