# Assignment

## What is the difference between Named Export, Default export and * as export?

In JavaScript, there are two ways to export code from a file: named exports and default exports.

A named export is used to export one or more values from a module using one of the following keywords: export const , export let, export var or export function. Named exports are identified by the name of the variable or function, and must be imported using the same name.

```
// myModule.js
export const name = 'John Doe';
export function sayHi() {
  console.log('Hi');
}

// anotherFile.js
import { name, sayHi } from './myModule.js';
console.log(name); // 'John Doe'
sayHi(); // 'Hi'

```

A default export is used to export a single value from a module as the default export. A module can have any number of named exports, but only one default export. Default exports are identified by the keyword export default, and can be imported using any name.

```
// myModule.js
export default function add(a, b) {
  return a + b;
}

// anotherFile.js
import add from './myModule.js';
console.log(add(1, 2)); // 3

```

`*` as is used when you want to import all exports from a module into a single variable.

```
// myModule.js
export const name = 'John Doe';
export function sayHi() {
  console.log('Hi');
}

// anotherFile.js
import * as myModule from './myModule.js';
console.log(myModule.name); // 'John Doe'
myModule.sayHi(); // 'Hi'

```

You use import `*` as to import everything from the file, this way you can access all the exports from that module via dot notation.

---

## What is the importance of config.js file

In a React application, a ***config.js*** file can be used to store configuration settings that determine the behavior and appearance of the user interface (UI). By keeping these settings in a separate file, they can be easily changed without modifying the rest of the application's code. This allows for a more modular and flexible development process, as well as making it easier to maintain and update the application.

Here are a few examples of the types of settings that could be stored in a config.js file:

- API endpoints: URLs for backend services or third-party APIs that the application needs to communicate with. By storing these URLs in a config file, it allows you to change the endpoints without having to update the code in multiple places.

- UI design elements: Colors, fonts, and other design elements that determine the look and feel of the application. By storing these settings in a config file, it allows you to change the design without having to update the code in multiple places.

- Feature toggles: Flags that enable or disable certain features of the application. By storing these flags in a config file, it allows you to easily turn features on and off, without having to modify the code.

- Environment variables: You could use config.js to set environment specific variables (e.g. development or production) and you can use them to set different values or behavior in your application

Overall, a ***config.js*** file in a React application can make it easier to manage and change the settings that determine the behavior and appearance of the UI, without having to modify the rest of the application's code.    

---

## What are React Hooks?

React Hooks are functions that allow you to use state and other React features in functional components. Prior to the introduction of hooks, the only way to use state and lifecycle methods in a component was by creating a class component. However, hooks make it possible to use these features in functional components, making it easier to write and understand your code.

---

## Why do we need a useState Hook?

***useState*** hook allows you to add state to a functional component. In React, state refers to a component's internal, mutable data that can change over time and can cause the component to re-render.

There are several reasons why we might need to use state in a component:

- Responding to user input: When a user interacts with a component, such as clicking a button or typing into a form, the component needs to respond by updating its own state and re-rendering itself to reflect the new data.

- Fetching data: A component may need to fetch data from an external source, such as an API, and use the data to update its own state.

- Managing local state: A component may need to keep track of its own internal state, such as whether a menu is open or closed.

- Controlling component behavior: A component's state can affect its behavior, such as whether it should show an error message or not.

***useState*** hook allows us to add state to a functional component, and it has two parts :

- The first part is the current state, it can be of any type and is what you get when you call the ***useState*** hook
- The second part is the function to update the state, usually it is named setState, setCount, setData etc.

---