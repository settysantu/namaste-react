# Assignment

## What are various ways to add images into our App? Explain with code examples

There are several ways to add images into a React app, including:

1. Using the `img` HTML tag.
2. Using the `background-image` CSS property.
3. Importing the image as a JavaScript module.

---

## What would happen if we do console.log(useState())?

If you were to console.log the result of calling the `useState()` Hook in a React functional component, you would see an array with two elements. The first element is the current state value, and the second element is a function that can be used to update the state.

```
import { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  console.log(useState()); // [0, ƒ]
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

It's worth noting that using `useState()` Hook outside the component will throw an error since it is only intended to be used within React functional components.

Also, it's important to note that `console.log(useState())` will not give any useful information and it is not a good practice to use it in this way. The state and the function to update the state should be used inside the component, not logged to the console.

---

## How will useEffect behave if we don't add a dependency array?

If you do not provide a dependency array when using the `useEffect()` Hook, the effect will run on every render of the component. This can lead to unexpected behavior and poor performance, as the effect will be re-executed even if the props or state used within the effect have not changed.

---

## What is SPA?

A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the app. The user never leaves the single page, and the app dynamically updates content in response to user actions.

In SPA, the browser doesn't need to refresh the whole page to show new content, it uses JavaScript to dynamically update the specific parts of the page, this makes the user experience more seamless and faster, as it eliminates the need for full page refreshes.

Implementing SPA's in React is very common, using a library like React Router to handle the client-side routing and updating the content dynamically based on the URL, this allows for faster navigation between pages without the need for a full page refresh.

React has also different libraries such as Gatsby, Next.js, and Create React App that are designed to make it easy to build SPA's.

---

## What is difference between Client Side Routing and Server Side Routing?

Client-side routing and server-side routing are two different ways to handle routing within a web application.

Client-side routing refers to the process of using JavaScript to update the URL and dynamically update the content on the page based on the current URL. When a user clicks on a link or enters a URL, the browser does not send a request to the server, instead, JavaScript is used to update the content on the page without a full page refresh. Examples of client-side routing libraries in React are react-router and reach-router.

Server-side routing refers to the process of handling routing on the server. When a user clicks on a link or enters a URL, the browser sends a request to the server, which then returns the appropriate HTML content based on the current URL. The server generates the HTML of the pages that the browser displays, this is the traditional way of handling routing. Examples of server-side routing frameworks are Express, Koa, and Hapi.

The main difference between the two is that client-side routing happens on the client-side, the browser, and it doesn't require a full page refresh, but it needs JavaScript to be enabled on the browser and it might cause some SEO issues. While server-side routing happens on the server-side, the server, and it doesn't need JavaScript to be enabled on the browser, but it needs a full page refresh and it might cause more latency due to the round trip to the server.

---