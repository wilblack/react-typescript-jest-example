import * as Redux from 'redux'
import {connect} from 'react-redux'
import { toggleTodo } from './actions'
import TodoList from './TodoList';

const getVisibleTodos = (todos: any, filter: any) => {
    let out: any;
    switch (filter) {
        case 'SHOW_ALL':
            out = todos
            break;
        case 'SHOW_COMPLETED':
            out = todos.filter( (t:any) => t.completed)
            break;
        case 'SHOW_ACTIVE':
            out = todos.filter( (t:any) => !t.completed)
            break;
    }
    console.log(out)
    return out;
}

const mapStateToProps = (state: any) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>) => {
    return {
        onTodoClick: (id: any) => {
            dispatch(toggleTodo(id))
        }
    }
}


const TodoContainer = connect<any, any, any>(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoContainer