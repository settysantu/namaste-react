# Assignment

## What is a Microservice?

A microservice is a type of software architecture where a large application is broken down into a collection of small, loosely-coupled services that communicate over a network. Each microservice is responsible for a specific business capability and can be developed, deployed, and scaled independently. 

This approach can improve scalability, maintainability, and flexibility of a system.

---

## What is Monolith architecture?

A monolithic architecture refers to the traditional way of building software applications, where all components of the system are tightly integrated and built as a single unit. In a monolithic architecture, an application is typically built as a single, large executable file that contains all the code, resources, and dependencies needed to run the application. 

This approach can make it difficult to scale different parts of the system independently, and it can also make it harder to update or maintain the application. 

Monolithic architecture is in contrast to a microservice architecture, which breaks an application down into smaller, independently deployable services.

---

## What is the difference between Monolith and Microservice?

The main difference between monolithic and microservice architecture is the way in which an application is designed and built.

In a monolithic architecture, an application is built as a single, large executable file that contains all the code, resources, and dependencies needed to run the application. This approach can make it difficult to scale different parts of the system independently, and it can also make it harder to update or maintain the application.

In a microservice architecture, a large application is broken down into a collection of small, loosely-coupled services that communicate over a network. Each microservice is responsible for a specific business capability and can be developed, deployed, and scaled independently. This approach can improve scalability, maintainability, and flexibility of a system.

Another key difference is the technology stack, in monolithic approach, it is single stack or technology, whereas in microservices, it can be different stack for different services.

Additionally, Monolithic architecture is tightly coupled and harder to change, whereas microservices allow for separation of concerns and can be changed or replaced more easily.

---

## Why do we need a useEffect Hook?

In React, the ***useEffect*** hook is used to synchronize a component with an external system, such as a browser API or a web socket connection. It allows a component to perform side-effects, like fetching data or updating the DOM, in response to changes in its props or state.

The ***useEffect*** hook accepts a callback function as its first argument, which is executed after the component has rendered. This callback function can be used to fetch data, set up subscriptions, or update the DOM. The second argument is an array of values that represent the component's dependencies. When any of these dependencies change, the callback function is executed again.

Here are some examples of when ***useEffect*** can be useful:

 - Fetching data from an API when a component mounts or when a specific prop or state changes.
 - Setting up or cleaning up a subscription to a web socket connection when a component mounts or unmounts.
 - Updating the document title or meta tags based on the component's props or state.

The ***useEffect*** Hook allows to handle side-effects in a functional component, which was only possible in class components before. It also allows for better control over when and how the side-effects are performed, which can improve the performance of the application and the user experience.

---

## What is Optional Chaining?

Optional chaining is a feature in JavaScript that allows you to safely access properties of an object without having to check if the object or its properties are undefined or null. It uses the `?`. operator (also known as the optional chaining operator) to access properties of an object.

---

## What is Shimmer UI?

Shimmer UI is a design pattern or technique used to create a visual cue for the user that content is being loaded or is being fetched from a server. It is often used in situations where the loading of content may take some time, such as when loading data from an API or when rendering large lists of items.

Shimmer UI typically consists of a repeated pattern of light and dark stripes that simulate the appearance of content loading. The pattern is usually displayed in a container of the same size and shape as the final content, and is often animated to give the appearance of movement.

It is a good practice to use Shimmer UI when the content is loading, as it gives the visual feedback to the user that the content is loading, and it also increases the perceived performance of the website, resulting in a better user experience.

It is also used to show that a particular element or data is loading, and it is not available yet. The shimmer effect can be applied to different elements like images, text, and other components.

---

## What is the difference between JS expression and JS statement

In JavaScript, an expression is a piece of code that returns a value. It can be a single value, such as a number or a string, or it can be a more complex value, such as the result of a function call or an arithmetic operation. Expressions can be used in a variety of contexts, such as in an assignment statement, an argument for a function, or as part of a larger expression.

On the other hand, a statement is a complete unit of code that performs a specific action. It can be an assignment statement, a control flow statement, or a function declaration.

Statements do not return a value, they are used to execute an action or to change the state of the program.

---

## What is Conditional Rendering, explain with a code example

Conditional rendering in React refers to the technique of conditionally displaying or rendering different components or parts of a component based on certain conditions. This is a common pattern in React development, and is often used to handle different states or user interactions in a user interface.

Here's an example of a functional component that uses conditional rendering to display different messages based on a boolean `isLoggedIn` prop:

```
import React from 'react';

function Greeting(props) {
  if (props.isLoggedIn) {
    return <p>Welcome back!</p>;
  } else {
    return <p>Please log in.</p>;
  }
}

export default Greeting;

```

In this example, the component uses an `if` statement to check the value of the `isLoggedIn` prop. Depending on the value of this prop, the component will return a different message to the user.

Another way to achieve this is using the ternary operator:

```
import React from 'react';

function Greeting(props) {
  return (
    <>
      {props.isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </>
  );
}

export default Greeting;

```

This approach is more concise and can be used in JSX directly.

You can also use the `&&` operator, which will only render the part after the `&&` if the condition before the `&&` is true.

```
import React from 'react';

function Greeting(props) {
  return (
    <>
      {props.isLoggedIn && <p>Welcome back!</p>}
      {!props.isLoggedIn && <p>Please log in.</p>}
    </>
  );
}

export default Greeting;
```

These are just a few examples of how to use conditional rendering in React. The technique can be used in a variety of ways to handle different states or user interactions in a user interface.

---

## What is CORS?

CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers that blocks web pages from making requests to a different domain than the one that served the web page. This is done to prevent malicious scripts from making unauthorized requests on a user's behalf.

CORS works by adding a set of HTTP headers to a server's response that specify which domains are allowed to make requests to the server. When a web page makes a request to a server, the browser checks the server's response headers to see if the domain of the web page is allowed to make requests to the server. If the domain is not allowed, the browser blocks the request and the web page will not receive a response.

For example, let's say that a web page served from "example.com" makes a request to "api.example.com" for some data. If the server at "api.example.com" has the appropriate CORS headers set, the browser will allow the request to go through and the web page will receive the data. But, if the server at "api.example.com" does not have the appropriate CORS headers set, the browser will block the request and the web page will not receive any data.

CORS headers can be set on the server side, and a common header that is used to enable CORS is the "Access-Control-Allow-Origin" header. This header is used to specify which domains are allowed to make requests to the server.

In short, CORS is a security measure to protect web applications from malicious scripts by blocking cross-origin requests made by a web page. It works by adding a set of headers to a server's response that specify which domains are allowed to make requests to the server.

---

## What is async and await?

***async*** and ***await*** are JavaScript keywords that are used to handle asynchronous operations in a more synchronous and readable way.

The ***async*** keyword is used to define an asynchronous function. An asynchronous function is a function that returns a promise and can be paused until the promise is resolved or rejected.

The ***await*** keyword is used inside an asynchronous function to pause the execution of the function until a promise is resolved. When the promise is resolved, the await keyword returns the resolved value.

The advantage of using async/await is that it makes handling asynchronous operations more readable and easier to understand, by allowing you to write asynchronous code that looks and behaves like synchronous code.

It also allows you to use try-catch blocks for error handling, making it more similar to synchronous code.

In summary, async/await is a way to handle async operations in javascript that makes it more like synchronous code and it makes the error handling more similar to synchronous code.

---

## What is the use of `const json = await data.json();` in  getRestaurants()

It is used to convert the response from the server into a JavaScript object.

The fetch() function returns a promise that resolves with a Response object. The Response object represents the response to the request. In this case, the response is expected to be in JSON format, so the json() method is used to parse the response and convert it into a JavaScript object.

The await keyword is used before the json() method to wait for the promise returned by the json() method to resolve. Once the promise is resolved, the resolved value (the JavaScript object) is assigned to the data variable.

So the `const json = await data.json();` line is used to convert the response from the server into a JavaScript object and assign it to the variable json . This variable will contain the data obtained from the server, which can then be used in the rest of the function or returned for further usage.

---