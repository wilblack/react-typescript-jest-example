import * as React from 'react'
import * as Redux from 'redux'
import {connect} from 'react-redux'
import {addTodo} from './actions'



const mapStoreToProps = (store: any) => {
    return {}
};

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>) => {
    return {
        addTodoHandler: (value: string) => {
            dispatch(addTodo(value))
        }
    }
}

class AddTodoContainer extends React.Component<any, any> {
    inputNode: HTMLInputElement;

    constructor(props: any) {
        super(props)

    }

    render () {
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!this.inputNode.value.trim()) {
                        return
                    }
                    this.props.addTodoHandler(this.inputNode.value);
                    this.inputNode.value = ''
                }}>
                    <input ref={node => {
                        this.inputNode = node
                    }} />
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}
export default connect<any, any, any>(mapStoreToProps, mapDispatchToProps)(AddTodoContainer)
