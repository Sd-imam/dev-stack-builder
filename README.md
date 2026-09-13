# Dev Stack Builder

Dev Stack Builder is a React and TypeScript based web application where users can explore different development technologies and build their own development stack.

## Technologies Used

- React
- TypeScript
- Vite
- CSS
- React-Toastify
- JSON

## Features

1. Users can explore different development technologies through responsive technology cards.
2. Users can add technologies to their personal stack and remove them when needed.
3. The website is fully responsive and includes loading states and toast notifications.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change inside a component.

### 3. What does the useState hook do, and where did you use it in this project?

The useState hook is used to create and manage state in a React component. In this project, it is used to manage the technology data, selected stack, and loading state.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to perform side effects in a React component. In this project, it is used to load the technology data from the JSON file when the application starts.

### 5. Why does every item in a .map() list need a unique key prop?

React uses the unique key to identify each item in a list. It helps React efficiently update and render the correct items when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements based on a condition. In this project, conditional rendering is used to display an empty stack message when the user has not added any technology.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props. A child component can send information back to the parent by calling a function that the parent passes through props.
