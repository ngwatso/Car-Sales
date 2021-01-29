import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "bulma/css/bulma.css";
import "./styles.scss";
import { featuresReducer } from "./reducers/featuresReducer";

// !! createStore
const store = createStore(featuresReducer);

// !! Wrap App in Provider
const rootElement = document.getElementById("root");
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
