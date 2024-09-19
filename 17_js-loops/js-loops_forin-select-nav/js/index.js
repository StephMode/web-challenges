console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--

// ERSTER VERSUCH

// for (const language in languages) {
//   const option = document.createElement("option");
//   option.textContent = language;
//   select.append(option);
// }

// ähnliche Logik wie mit der ol bei den Programmiersprachen, nur dass hier select & option
// ging direkt von der Hand

// ZWEITER VERSUCH

// Fehler im ersten Versuch:
// ❌ falsche Notation in option.textContent
// ❌ option.value hat noch gefehlt
// 👆🏻 schau nochmal notation array!!!
// 💡 textContent ist hier für den sichtbaren Namen im Dropdown
// 💡 option.value bildet den Eingabe-Teil dieses formulars ab
// 💡 bedenke, dass das letztlich ein form ist!!!

for (const language in languages) {
  const option = document.createElement("option");
  option.textContent = languages[language];
  option.value = language;
  select.append(option);
}

// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--

// Erster Versuch

// const li = document.createElement("li");
//   li.textContent = nav[navContent].text;
//   const a = document.createElement("a");
//   a.add = nav[navContent].href;
//   li.append(a);
//   ul.append(li);

// Annahme:
// textContent mit "navItem" funktioniert nicht, weil textContent hier aus einem object genommen wird und die Notation anders ist.
// Aufbau der statements fehlerhaft, weil die Verschachtelung der Elemente unvollständig war.
// Mann muss ein a mit setAttribute href und textContent in ein li verschachteln, nicht den textConntent dem li zuweisen, weil das li ja nur der container für den a ist

// Zweiter Versuch

// for (const navContent in nav) {
//   const li = document.createElement("li");
//   const a = document.createElement("a");
//   a.setAttribute("href", "nav[navContent].href");
//   a.textContent = nav[navContent].text;
//   li.append(a);
//   ul.append(li);
// }

// Hat funktioniert, weil ich createElement-method korrekt verschachtelt habe, nach diesem Muser: li > a href:"" > content
// Merke Syntax Notation für referenziertes Objekt: object[const des loops]Referenz des object im object

// Dritter Versuch

// Fast richtig, nur ein Fehler bei
// ❌ a.setAttribute("href", "nav[navContent].href")
// 💡 der valie für "href" NICHT IN "" !!!

for (const navContent in nav) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.setAttribute("href", nav[navContent].href);
  a.textContent = nav[navContent].text;
  li.append(a);
  ul.append(li);
}

// --^-- write/change code here --^--
