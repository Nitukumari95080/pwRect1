import "./App.css";
import Button from "./Button";
import React from "react";
import Person from "./Person";
import Header from "./Header";
import List from "./List";

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };
  const groceryItem = ['Apples', 'Bananas', 'Carrots', 'Bread'];

  return (
    <>
      <div>
        <Person />
        <h1>Person Information</h1>
        <Person name="John Doe" age={30} />
        <Person name="Jane Smith" age={25} />
      </div>
      <div>
        <Button />
        Create a component na6ed "Button" that takes two props - "text" and "onClick". The component should display a utton element with the given text and call the onClick function when clicked
        <h1>Click the Button</h1>
        <Button text="Click Me" onClick={handleClick} />
      </div>

      <div>
        <Header />
        <Header title="Welcome to My App" />
        <p>This is the main content of the app.</p>
      </div>

      <div>
        <p>
        Create a component named "List" that takes one prop - "items". The component should display an unordered list element with the given list items.
        </p>
        <h1>Grocery List</h1>
        <List/>
            <List items={groceryItem} />
      </div>
    </>
  );
};

export default App;
