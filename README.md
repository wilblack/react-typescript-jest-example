# react-typescript-jest-example
An example Todo app showing how to test a React-redux app written in Typescript 



### Setup

In this tutorial I will be settuing up the Example React-Redux app in Typescript, adding the proper types, and then adding Jest

We will be using `creat-react-app-typescript` [](https://github.com/wmonk/create-react-app-typescript) to create the app.

I closely follow the [Redux Todo example app for React](http://redux.js.org/docs/basics/ExampleTodoList.html)

For writing test I followed this guide [Redux Writing Tests Guide](http://redux.js.org/docs/recipes/WritingTests.html).

 


```
npm install -g create-react-app

create-react-app todo-app --scripts-version=react-scripts-ts
cd todo-app/
npm start
```

Congrats. At this point you have a React app running written in Typescript. Now lets install some dependencies.

```
npm install redux react-redux react-router-dom --save

npm install @types/react-redux react-router-dom --save


```