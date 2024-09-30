import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
--easedTransition: 350ms ease-in-out;
--modal-color: #fbfbfb;
--body-color: #f3f3f3;
--text-color: #191A15;

}

html[data-theme='green']{
 
}

html[data-theme='blue']{
 
}



html[data-theme='orange']{

}

*,
*::before,
*::after  {
  box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    margin: 0;
    color: var(--text-color);
    background-color: var(--body-color);

}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  font-family: inherit;
  border: none;
  cursor: pointer;
}

input {
  font-family: inherit;

  &:focus {
    outline: none;
  }
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  border: none;
}
`;

export default GlobalStyles;
