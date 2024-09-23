console.clear();

const url = "https://swapi.py4e.com/api/people/3";
// url manipulieren, um an r2d2s daten zu kommen
// weil: das einzelne instanceses sind und r2d2 in der instance 3
// hier funktioniert also nicht wie in der array/obj notation logic

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(response);
  console.log(data);
  console.log(data.name);
  console.log(data.eye_color);
  //   return data;
}

// return data brauche ich gar nicht, weil ich mit den data gar nicht weiter arbeiten muss
// das war nicht teil der AUFGABE
// einfach weiter mit clog

fetchData();
