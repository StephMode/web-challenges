import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        {USERS.map((user) => (
          <Card key={user.id} user={user}></Card>
        ))}
        {/* <Card user={USERS[0]} /> // das war der code ohne iteration */}
      </div>
    </main>
  );
}

// Task 1:
// 1) Rephrase problem:
// innerhalb des div die Card comp für jeden Eintrag in der database interieren
// für jede iteration soll eine card ge-render-ed werden, die einen key erhalten soll
// 2) plan:
// innerhalbd div higher order fn map() für den array USERS
// callback fn braucht user(=einzelnes element im array)
// 3) pseudo-code: USERS.map (user= elements im array) => return die comp <Card key={user.key} user={user}>
// 👆🏻never forget the key
