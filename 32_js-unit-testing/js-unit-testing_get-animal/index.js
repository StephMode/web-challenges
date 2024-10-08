export function getAnimal(animal) {
  if (animal === "cats") {
    return "I totally love cats!";
  } else if (animal === undefined) {
    return "I do not like animals at all!";
  } else {
    return `I like ${animal}!`;
  }
}

/*

if else statement in function to create diffrent outputs based on arguments in param as required by tests

1) function needs a param as basis for condition of if/else

2) if/else logic

1 if animal === "cats" return "Tot. love cats"
2 else of animal === !"" (not empty string) return "Tot. love {animal}"
3 else if animal === undefined (call w/o arguments) return "Don't like ainmals"

🟡 we just need to return here, because we are testing (output in browser console not strictly necessary here)

?!: erstmal versuchen, vllt. cats und !"" vertauschen

1st attempt

export function getAnimal(animal) {
    if (animal === "cat") {
        return "I totally love cats!"
    } else if (animal !"") {
        return `I totally love ${animal}!`
    } else if (animal === undefined) {
        return "I do not like animals at all!"
    }
}

xx> 🟡 syntax highlighting displays last statement as greyed out

Maybe I don't need to/shouldn't specify 3rd case in else if, but rather else, like

1 if animal === "cats" return "Tot. love cats"
3 else if animal === undefined (call w/o arguments) return "Don't like ainmals"
2 else (= not empty string) return "Tot. love {animal}"

==> ✅ worked 


*/
