import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";
function Card({ user }) {
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        {/* <Tag tag={user.roles[0]} /> */}
        {user.roles.map((role, index) => (
          <Tag key={index} tag={role} />
        ))}
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;

/*
// Task 1:
1) Rephrase problem:
- die comp Tag soll für jede USERS.user{role} ein DOM element erstellen, damit diese in der Card comp gerendert werden kann
- das DOM element soll den text content des jeweilen element des array "roles" des user-obj haben
- außerdem einen key pro Tag comp, dieser = element des array "roles"

2) plan:
// innerhalbd des return statements durch USERS nach den roles iterieren // -> geht einfacher
💡 siehe { user } dieser Comp -> ich kann damit also direkt in die USERS > user - objects einsteigen
ich iteriere also direkt durch die roles arrays
// callback fn braucht user(=einzelnes element im array), key=user.role, den string aus dem array element //


3) pseudo-code: USERS.map (user= elements im array)
=> return DOM element via JSX <li key={user.roles} > user={user} </li>
?? muss ich eine map in der map machen
*/
