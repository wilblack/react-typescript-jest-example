import * as React from 'react'



const Link = (props: any) => {
    if (props.active) {
        return <span>{props.children}</span>
    }

    return (
        <a href="#"
           onClick={e => {
               e.preventDefault();
               props.onClick();
           }}
        >
            {props.children}
        </a>
    );
}


export default Link