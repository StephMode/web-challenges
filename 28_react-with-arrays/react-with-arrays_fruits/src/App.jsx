import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2345,
      name: "🍏 Apple",
      color: "green",
    },
    {
      id: 9875,
      name: "🥝 Kiwi",
      color: "green",
    },
    {
      id: 7586,
      name: "🥥 Coconut",
      color: "yellow",
    },
    {
      id: 3259,
      name: "🍓 Strawberry",
      color: "red",
    },
  ];

  return (
    <div className="app">
      {/* <Card name="🍌 banana" /> */}
      {/* {fruits.map((fruit) => return{<Card name={fruit.name}></Card>} )} */}
      {/* {fruits.map((fruit) => return(<Card name={fruit.name}></Card>))} */}
      {fruits.map((fruit) => (
        <Card
          id={fruit.id}
          name={fruit.name}
          key={fruit.id}
          color={fruit.color}
        ></Card>
      ))}
    </div>
  );
}
