import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		border: 0;
		outline: 0;
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		box-shadow: none;
		box-sizing: border-box;
	}

	h1,
	h2,
	h3,
	h4 {
		line-height: 1.2;
	}

	html {
		scroll-behavior: smooth;
	}

	a {
		text-decoration: none;
	}

	button {
		cursor: pointer;
	}

	body{
		overflow-x: hidden;
	}
`;
