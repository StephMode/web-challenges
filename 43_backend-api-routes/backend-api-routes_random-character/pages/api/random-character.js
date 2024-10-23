// load chance
const Chance = require("chance");

// initiate chance so it can be used
const chance = new Chance();

export default function handler(request, response) {
  const character = {
    firstName: "Samuel",
    lastName: "Beckett",
    age: chance.age(),
    twitter: chance.twitter(),
  };
  response.status(200).json(character);
}
