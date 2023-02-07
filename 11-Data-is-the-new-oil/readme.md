# Assignment

## What is prop drilling?

Prop drilling refers to the process of passing down props from a parent component to a child component in React, through every intermediate component in the hierarchy, even if they are not directly using the props. 

This can become an issue in larger component trees where data needs to be passed from the top-level component to a deeply nested component, resulting in a long chain of props being passed through many components.

---

## What is lifting the state up?

Lifting the state up is a technique in React to manage shared state between multiple components. The idea is to have a common parent component that holds the state, and then pass down the necessary data and methods as props to its child components. 

This way, instead of each child component having its own state, the state is centralized and managed in one place, avoiding duplication and making it easier to update and maintain the state. 

When a child component needs to update the state, it can call a callback function that is passed down as a prop, which will then modify the state in the parent component.

---

## What is Context Provider and Context Consumer?

Context Provider and Context Consumer are two components in React that are used to manage context, or data that can be shared across multiple components in an application.

The `Context.Provider` component is used to provide data to the context, and it takes a `value` prop which is the data to be shared. The Provider should wrap all the components that need access to the shared data.

The `Context.Consumer` component is used to consume the data provided by the Provider. It takes a render prop that receives the context value as its argument, and then it can be used to render content based on the context data.

By using Context, you can avoid prop drilling, which is the process of passing down props through multiple levels of components, and access the context data directly in any component that is a descendant of the Context Provider.

---

## If you don’t pass a value to the provider does it take the default value?

Yes, if you don't pass a `value` prop to the `Context.Provider`, it will take the default value specified when the context was created using createContext.

---