import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Esraa" />
      <Greeting name="Roland" />
    </div>
  );
}

const coachName = "Esraa";

function Greeting({ name }) {
  // return <h1>Hello {name === coachName ? "Coach" : `${name}`} !</h1>; //
  return <h1>Hello {name}!</h1>; // standard return based upon prop input by App
}

/* Part 2: Conditional Rendering w/ coach names

Requirement: if "name" prop equals name of "coach" render "Hello, Coach!", else render "Hello, {name}!"
xx> needs to be reworked
Requirement: if "isCoach" prop equals true render "Hello, Coach!", else render "Hello, {name}!"

1. declare const coach = "Esraa" within the App() for correct scope
xx> within the App() incorrect, because Greeting() has to have access, too -> try global const
xx> too complex and doesn't work anyways, so try boolean instead
 1. Add prop "isCoach" and tern op into component and App respectively

 xx>
 function Greeting({ name, isCoach }) {
  return <h1>Hello {isCoach ? "Coach" : { name }}!</h1>; //
  // return <h1>Hello {name}!</h1>; // standard return based upon prop input by App
}
  ❌ doesn't render anything if isCoach=false

  xx>
  function Greeting({ name, isCoach }) {
  return <h1>Hello {isCoach ? "Coach" : "{ name }"}!</h1>; //
  // return <h1>Hello {name}!</h1>; // standard return based upon prop input by App
}
  ❌ renders "Hello { name }!" if isCoach=false
  💡 with this syntax, param prop "name" isn't called
  --> maybe nest {isCoach} ternOp within name
  xx> doesn't work

  --> maybe else "" and then {name}
  ❌ renders "Hello Coach Stephan !" if isCoach = true, because {name} will be rendered anyhow



2. implement if/else statement/ternary operator in greeting component as per req
3. Test with passing "Esraa" to the comp call

*/

/* Fehler in meinem ersten Code

❌ 1) typos im call und fn/comp declaration
❌ 2) man braucht keine "" innerhalb von JSX syntax
❌ 3) kein ; innerhalb des return() nach einzelnen JSX tags

export default function App() {
  return <Gretting name="Stephan" />;
}

function Gretting({ name }) {
  return ( 
      <h1>"Hello {name}!"</h1>;

  );
}
  */
