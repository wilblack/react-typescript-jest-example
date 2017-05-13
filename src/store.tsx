import { createStore } from 'redux';
import {todoApp} from './reducers';


// Create the application state store
export default createStore<any>(
    todoApp,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() // For debugging only
);
