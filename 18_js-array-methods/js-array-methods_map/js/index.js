console.clear();

// 💡 Key Learning

// der param ist eine variable für die indizes in einem array
// wir können also nur durch den param in dieser higher order fn die values der indizes greifen

const arrayX = ["aa", "bb", "cc"];

const capitalLettersS = arrayX.map((indexOfArray) => {
  return indexOfArray.toUpperCase();
});

console.log(capitalLettersS);

// In dieser higher order function, die ein if/else und ein for loop verbindet,
// steht der param für die indizes (oder objects, sofern objects im array vorhanden)
// der param ermöglicht, den gewünschten array zu druchlaufen

const array = [
  {
    id: "aa",
    isRevelent: true,
  },
  {
    id: "bb",
    isRevelent: false,
  },
  {
    id: "cc",
    isRevelent: true,
  },
];

// hier greifen wir jeden index im array, sprich die objects mit ihren key value pairs mit dem param

const capitalLetters = array.map((indexOfArray) => {
  return indexOfArray.id.toUpperCase();
});

// da die values der indizes objects, müssen wir hier präziser notieren/adressieren
// deshalb indexOfArray.id; => damit adressieren den value des key "id:" in jedem object, das wir mit der variable indexOfArray gefasst haben

console.log(capitalLetters);

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

console.log("----");

const lowerCaseAnswers = cards.map((meh) => {
  return meh.answer.toLowerCase();
});

console.log(lowerCaseAnswers);

// ['as often as you like.', ...]

const questionsAndAnswersTogether = cards.map((object) => {
  return object.question + " - " + object.answer;
});

console.log(questionsAndAnswersTogether);

// ["How often can I use <header>? - As often as you like.", ...]

const questionAndAnswer = cards.map((object) => {
  return "question: " + object.question + "answer: " + object.answer;
});

console.log(questionAndAnswer);

// [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
// der export ist wahrscheinlich für den testrun
