import * as React from 'react'

const Todo = (props: any) => (
    <li
        onClick={props.onClick}
        style={{
            textDecoration: props.completed ? 'line-through' : 'none'
        }}
    >
        {props.text}
    </li>
)

export default Todo