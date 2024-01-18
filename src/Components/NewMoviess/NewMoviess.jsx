import { Button } from "../ul/button/Button";
import { Input } from "../ul/input/Input";
import "./NewMoviess.css";
import { useRef } from "react";

export const NewMoviess = ({ state, setState }) => {
	// const [moviesName, setMoviesName] = useState("");
	// const [moviesPhoto, setMoviesPhoto] = useState("");
	// const [moviesG, setMoviesG] = useState("");
	const moviesName = useRef(null);
	const moviesPhoto = useRef(null);
	const moviesG = useRef(null);
	// const [stateResult] = useState("");

	function valueInputs() {
		const NewMovies = {
			name: moviesName.current.value,	
			photo: moviesPhoto.current.value,
			genre: moviesG.current.value,
			id: Date.now().toString(),
		};
		setState([...state, NewMovies]);
		// setMoviesName("");
		// setMoviesPhoto("");
		// setMoviesG("");
		moviesName.current.value = "";
		moviesPhoto.current.value = "";
		moviesG.current.value = "";
	}
	console.log(moviesName);

	const removeCard = (id) => {
		const deleteCards = [...state];
		// const deleteCards = [...state, stateResult];
		deleteCards.splice(id);
		setState(deleteCards);
	};

	return (
		<div>
			<form
				className="allInputs"
				onSubmit={(event) => {
					event.preventDefault();
					valueInputs();
				}}>
				<Input
					type="text"
					className="inputMain"
					placeholder="Write movie name!"
					value={moviesName}
					// setData={setMoviesName}
				/>
				<Input
					type="url"
					className="inputMain"
					placeholder="url"
					value={moviesPhoto}
					// setData={moviesPhoto}
				/>
				<Input
					type="text"
					className="inputMain"
					placeholder="Write movie genre!"
					value={moviesG}
					// setData={setMoviesG}
				/>
				<div>
					{/* <Button onClick={removeCard} text="Delete" /> */}
					<Button type="submit" text="Add" className="addButton" />
				</div>
			</form>
		</div>
	);
};
