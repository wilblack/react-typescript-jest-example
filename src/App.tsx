import * as React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Routes from './routes';
import AddTodo from './todo/AddTodoContainer';

class App extends React.Component<{}, null> {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <AddTodo/>
                    <Routes/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
