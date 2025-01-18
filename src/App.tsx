import { useState } from "react";
import "./App.css";
import { ListOfUsers } from "./components/ListOfUsers";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Nuestro proyecto con Redux</h1>
			<ListOfUsers />
		</>
	);
}

export default App;
