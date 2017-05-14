import * as React from 'react'
import Todo from './Todo';

//const TodoList = (props: any) => {
class TodoList extends React.Component<any, any> {

    render() {
        return (
            <div>
                <h3>Todos</h3>
                <ul>
                {this.props.todos.map((todo: any) =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={() => this.props.onTodoClick(todo.id)}
                    />
                )}
                </ul>
            </div>
        )
    }

}

export default TodoList