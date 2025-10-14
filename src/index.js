import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const App = function () {
  return (
    <div clasName="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = function () {
  //  const style = { color: "green", fontFamily: "cursive", fontSize: 45 };
  const style = {};
  // return <h1 style={style} className="Header">Papa Yaw Eatry</h1>;
  return (
    <header className="header">
      <h1 style={style}>Papa Yaw Eatry</h1>
    </header>
  );
};

const Menu = function () {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        // price="10"
        price={10}
        photoName="pizzas/salamino.jpg"
      />

      <Pizza
        name="Pizza focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        //price="6"
        price={12}
      />
    </main>
  );
};

/*
WITHOUT THE USE OF PROPS
const Pizza = function () {
  return (
    <div>
      {" "}
   // <h3>Pizza salamino</h3>
      <img src="pizzas/salamino.jpg" alt="salamino" />
      <p>Tomato, mozarella, and pepperoni</p>
    </div>
  );
};
*/

const Pizza = function (props) {
  return (
    <div className="pizza">
      {" "}
      <h3>{props.name}</h3>
      <img src={props.photoName} alt={props.name} />
      <div>
        <p>{props.ingredients}</p>
        <span> {props.price + 5}</span>
      </div>
    </div>
  );
};

const Footer = function () {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  console.log(hour);

  // if (hour >= openHour && hour <= closeHour) alert("We are Open");
  // else alert("Closed!");

  return <footer className="footer">We are Open!</footer>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
