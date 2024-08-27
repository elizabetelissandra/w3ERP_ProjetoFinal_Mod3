import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
body{
margin: 0;
padding: 0;
font-family: 'Sora', sans-serif;
background-color: ${props => props.theme.palette.background.paper};
}
`