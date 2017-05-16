# react-typescript-jest-example
An example Todo app showing how to test a React-redux app written in Typescript 


### Introduction
In this tutorial I will be setting upan example React-Redux app in Typescript, defining the types i need, and finally writing unit tests for the app with Jest and Enzyme. 
This example todo app is created using the `creat-react-app-typescript` [`creat-react-app-typescript`](https://github.com/wmonk/create-react-app-typescript) repo by [wmonk](https://github.com/wmonk).
It closely follows the [Redux Todo example app for React](http://redux.js.org/docs/basics/ExampleTodoList.html) 
but has some differences, for instance I added [`react-router`](https://github.com/ReactTraining/react-router) to handle page navigation.  
    
    
For writing test I followed this guide [Redux Writing Tests Guide](http://redux.js.org/docs/recipes/WritingTests.html).


### Initial Setup
You will need to need NodeJS and the Node Package Manager (NPM) installed on your machine. Please see [Node/org](https://nodejs.org/) for installations instructions.
First we will create a new React app in Typescript using the `create-react-app-typesctipt`. We'll name is `todo-app`.

 
```
npm install -g create-react-app

create-react-app todo-app --scripts-version=react-scripts-ts
cd todo-app/
npm start
```


Congrats. At this point you have a React app running written in Typescript. Now lets install some Node dependencies.

```
# Run this in the topa-app/ directory

npm install redux react-redux react-router-dom --save
npm install @types/react-redux react-router-dom --save


```

### Directory Structure
For this app I chose to use a "domain-based" directory structure as opposed to a "function-based" directory structure. I prefer the domian-based 
structure because it keeps components and there related files together and helps maintain modularity. Also having an Angular/Ionic
background this directory structure feels right at home.
Here is an example of the directory structure.





```
|-- react-typescript-jest-example
  |-- .gitignore
  |-- README.md
  |-- package.json
  |-- tsconfig.json
  |-- tslint.json/
  |   |-- misc.xml
  |   |-- modules.xml
  |   |-- vcs.xml
  |   |-- workspace.xml
  |-- public/
  |   |-- favicon.ico
  |   |-- index.html
  |-- src/
      |-- App.css
      |-- App.test.tsx
      |-- App.tsx
      |-- Footer.tsx
      |-- Header.tsx
      |-- index.css
      |-- index.tsx
      |-- logo.svg
      |-- reducers.tsx
      |-- routes.tsx
      |-- store.tsx
      |-- filter/
      |-- |-- __tests__/
      |   |-- FilterLinksContainer.tsx
      |   |-- Link.tsx
      |   |-- actions.tsx
      |   |-- reducers.tsx
      |-- todo/
          |-- AddTodoContainer.tsx
          |-- Todo.tsx
          |-- TodoContainer.tsx
          |-- TodoList.tsx
          |-- actions.tsx
          |-- reducers.tsx
          |-- __tests__/
```

Note; to makke this I used []() with the commange `node mddir "../../../" > ../../../dir-struct.json`




