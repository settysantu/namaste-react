# Assignment

## How do you create Nested Routes react-router-dom configuration

Using *children* we can create Nested Routes.

---

## What is the order of life cycle method calls in Class Based Components

The order of lifecycle method calls in React class-based components is as follows:

1. constructor()
2. render()
3. componentDidMount()

Then, if the component receives new props or state:

1. render()
2. getSnapshotBeforeUpdate()
3. componentDidUpdate()

Then, if the component is being removed from the DOM:

3. componentWillUnmount()

---

## Why do we use componentDidMount?

`componentDidMount()` is a lifecycle method in React class-based components that is called after the component has been rendered to the DOM. This method is often used to perform any setup or initialization that requires the component's DOM node to be present, such as fetching data from an API, adding event listeners, or setting up third-party libraries.

It is important to note that the initial render cycle does not cause a componentDidMount call ,it only happens when the component is added to the DOM. Also, ***componentDidMount*** is only called once, whereas other lifecycle methods such as componentDidUpdate() are called whenever the component updates.

Another important aspect to consider is that because `componentDidMount()` is called after the first render, it is guaranteed that the component's children have also been rendered, so it is safe to call `setState()` in this method without triggering an extra render.

In summary, `componentDidMount()` is used to perform setup or initialization logic that requires the component's DOM node to be present and only need to be executed once. It is a good place to fetch data, setup subscriptions or add event listeners.

---

## Why do we use componentWillUnmount?

`componentWillUnmount()` is a lifecycle method in React class-based components that is called just before a component is removed from the DOM. It is often used to perform cleanup tasks such as canceling network requests, removing event listeners, or destroying third-party libraries.

For example, when you have a component that makes a network request when it mounts and receives new props, you should cancel the request when the component is about to unmount. This can be done with ***componentWillUnmount***.

---

## Why do we use super(props) in constructor?

In a React component class, the `constructor(props)` method is called before the component is mounted and is used to initialize the component's state and bind event handlers. When you define a constructor for a component class, you must call the `super(props)` method before you can use the this keyword inside the constructor.

The `super(props)` method calls the constructor of the component's parent class, which is React.Component, and passes the props argument to it. This allows the parent class to set up the component's props property and other internal methods, such as setState().

For example,

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.count}
      </button>
    );
  }
}
```

In this example, the `super(props)` method is called first in the constructor, which allows the component to access the props object and the `setState()` method. Without calling `super(props)`, the component would not have access to the props object and would throw an error when trying to call `setState()`.

It's worth noting that if you don't need to initialize state or bind event handlers, you don't need to define a constructor in your component class. You can just define a class component without a constructor. React will call super() for you.

In summary, `super(props)` is used in the constructor of a React component class to call the constructor of the parent class, React.Component, and pass the props argument to it. This allows the parent class to set up the component's props property and other internal methods, such as `setState()`, and the component can access them.

---

## Why can't we have the callback function of useEffect async?

The callback function of ***useEffect*** is not directly allowed to be asynchronous because it is executed synchronously as part of the React render cycle. If an effect callback function is asynchronous, it would delay the completion of the render cycle, potentially causing issues with the component's state and user interface.

An async function returns a promise, the problem with that is that React needs to know when the effect has completed and what the next state should be. If an effect callback is async, React can't know when it has finished, and the state of the component is not guaranteed to be consistent.

A common pattern to handle async code in ***useEffect*** is to use ***async/await*** inside a synchronous function.

In summary, the callback function of ***useEffect*** is not directly allowed to be asynchronous because it is executed synchronously as part of the React render cycle. If an effect callback function is asynchronous, it would delay the completion of the render cycle, potentially causing issues with the component's state and user interface. To handle async code in ***useEffect***, you can use ***async/await*** inside a synchronous function.

---