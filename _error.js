// pages/_error.js
import React from "react";

function ErrorPage({ statusCode }) {
	if (statusCode === 404) {
		return <h1>Pagina nu a fost găsită!</h1>;
	}

	return <h1>A apărut o eroare pe server!</h1>;
}

ErrorPage.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default ErrorPage;
