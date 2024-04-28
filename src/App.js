import React from "react";
import "./App.css";

function App() {
  const data = [
    {
      image:
        "https://iheartcraftythings.com/wp-content/uploads/2021/04/How-to-Draw-Cartoon-Face-%E2%80%93-Featured-Image.jpg",
      name: "Sanjay",
      batch: "B43WE",
    },
    {
      image:
        "https://iheartcraftythings.com/wp-content/uploads/2021/04/How-to-Draw-Cartoon-Face-%E2%80%93-Featured-Image.jpg",
      name: "Surya",
      batch: "B42WE",
    },
    {
      image:
        "https://iheartcraftythings.com/wp-content/uploads/2021/04/How-to-Draw-Cartoon-Face-%E2%80%93-Featured-Image.jpg",
      name: "Jagan",
      batch: "B41WE",
    },
  ];

  return (
    <div className="App">
      {data.map((person, index) => (
        <Home
          key={index}
          image={person.image}
          name={person.name}
          batch={person.batch}
        />
      ))}
    </div>
  );
}

export default App;

// jsx javascript xml

function Home(props) {
  return (
    <div className="home-component">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <h4>{props.batch}</h4>
    </div>
  );
}

/*
const props = {
  name : "sanjay",
  batch : "B43WE"
}
props.name

background work:-
return React.createElement(
  "div",
  { id: "home", className: "home-class" },
  React.createElement("h1", null, "Hello")
);

*/

/*
Topic:-
Why react
Setup react project
Understanding JSX
Components (simple HTML layout to reusable react components)
Understanding the components
Passing data through props
Deploying react to netlify
*/
