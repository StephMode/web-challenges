/*

Change the appearance of the box according to the values of the sliders (color, border radius, rotation)

– [ ] Add an event listener for each input element.
– [ ] When the slider control of inputColor is moved, change the background color of the box. Hint: You need to work with the hsl() functional notation for colors.
– [ ] When the slider control of inputRadius is moved, change the border radius of the box. If the control reaches the right end, make the box look like a circle.
– [ ] When the slider control of inputRotation is moved, rotate the box. Hint: You may need to work with the CSS property "transform" and a value that contains "rotate" and "deg".

Hint: You can work with the property "style", just like you worked with the property "classList".

For further information check MDN:
- about inputs of type="range": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
- about hsl(): https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
- about transform & rotate: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
- about CSS declarations with "style": https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

*/

// Step 1: declare const for event listener

const colorSlider = document.querySelector('[data-js="input-color"]');
const radiusSlider = document.querySelector('[data-js="input-radius"]');
const rotationSlider = document.querySelector('[data-js="input-rotation"]');
const box = document.querySelector('[data-js="box"]');

// Step 2: create eventListener themselves

colorSlider.addEventListener("input", () => {
  //   console.log("slider betätigt");
  const sliderValue = colorSlider.value;
  //   console.log("The slider value is " + sliderValue);
  //   box.setAttribute("style", `background: hsl(${sliderValue}, 70%, 60%)`); // 👆🏻 möglich, aber überschreibt alle style attributes im dom element
  box.style.backgroundColor = `hsl(${sliderValue}, 70%, 60%)`; // ⭐️ besser, weil es gezielt das style attribute bcg im dom überschreibt
});

/* LÖSUNGSVERSUCH

fast alles auf Anhieb richtig gemacht
nur template literals nicht ganz richtig benutzt

colorSlider.addEventListener("input", () => {
  //   console.log("slider betätigt");
  const sliderValue = colorSlider.value;
  //   console.log("The slider value is " + sliderValue);
  box.setAttribute("style", "background: hsl(`${sliderValue}`, 70%, 60%)"); // ❌ diese Schreibweise hat zur Folge, dass der hls weitergehen wird als
                                                                            // string mit value "hsl(`${sliderValue}`, 70%, 60%), mit substring "`${sliderValue}`" weitergegen
                                                                            // deshalb:
                                                                            `background: hsl(${sliderValue}, 70%, 60%)`
                                                                            damit alles als string value weitergeben wird, was nötig ist für diese method
                                                                            denn hsl und andere color values müssen immer als ein String ins DOM injiziert werden
                                                                            ${sliderValue} innerhalb der single back ticks wird dann als in string umgewandelter value
                                                                            der const sliderValue weitergeben
});

*/

radiusSlider.addEventListener("input", () => {
  const sliderValue = radiusSlider.value;
  box.style.borderRadius = `${sliderValue}%`;
});

rotationSlider.addEventListener("input", () => {
  const sliderValue = rotationSlider.value;
  box.style.transform = `rotate(${sliderValue}deg)`;
});
