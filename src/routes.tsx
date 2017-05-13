import * as React from 'react';

import { Route } from 'react-router-dom';
import TodoContainer from './todo/TodoContainer';


export default class Routes extends React.Component<{}, null> {
    render() {
        return (
            <div>
                <Route exact={true} path="/" component={TodoContainer}/>
                <Route path="/todos" component={TodoContainer} />
            </div>
        );
    }
}
