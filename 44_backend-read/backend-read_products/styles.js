import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    --color-nemo: #ff4a11;
    --color-granite: #252629;
    --color-water-10: #f3f5f9;
    --color-foam: #ffffff;

    --gap: 20px;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    display: grid;
    margin: auto;
    font-family: system-ui;
    place-items: center;
    min-height: 100vh;
    max-width: 50rem;
  }

  /* .form--container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: var(--color-nemo) solid 2px;
    border-radius: 5px;
    padding: 5px;
  } */
`;
