import { useEffect, useState } from "react";
import dog from "./dog.png";

// create your App component here
function App() {
	const [image, setImage] = useState(dog);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	function displayImage() {
		fetch("https://dog.ceo/api/breeds/image/random")
			.then((res) => {
				if (!res.ok) throw new Error("Could not fetch data");
				return res.json();
			})
			.then((data) => {
				setImage(data.message);
				setLoading(false);
			})
			.catch((error) => setError(error.message));
	}

	useEffect(displayImage, []);
	return (
		<div>
			<h1>Find your fav dog🐶!</h1>
			{loading ? "Loading..." : ""}
			{error ? error.message : ""}
			<img src={image} alt="dog breed" width="200px" />
			<button onClick={displayImage}>See Dog🐶</button>
		</div>
	);
}
export default App;
