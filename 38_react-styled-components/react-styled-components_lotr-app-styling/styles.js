import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: system-ui;
    
  }
`;

/*  Task bcg for details page

The bcg has to be set dynamically based on the page we are at
VolumeDetailPage in particular, that is

the bcg need set based on the color value in the array in data.js for part. VolumeDetails

*/
