import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import { Foods } from "./Foods.jsx";
import Convert from "./html-to-jsx.jsx"
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Greeting />
    <Foods />
    <Convert />
	</StrictMode>
);
