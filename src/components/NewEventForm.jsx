import { useState } from "react";
import "./NewEventForm.css";

const NewEventForm = ({ addEvent }) => {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [location, setLocation] = useState("Constanta");

	const resetForm = () => {
		setTitle("");
		setDate("");
		setLocation("Constanta");
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const event = {
			title: title,
			date: date,
			location: location,
			id: Math.floor(Math.random() * 10000),
		};

		console.log(event);
		addEvent(event);
		resetForm();
	};

	return (
		<form className="new-event-form" onSubmit={handleSubmit}>
			<label>
				<span>Event Title:</span>
				<input
					type="text"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					required
				/>
			</label>
			<label>
				<span>Event Date:</span>
				<input
					type="date"
					onChange={(e) => setDate(e.target.value)}
					value={date}
					required
				/>
			</label>
			<label>
				<span>Event location:</span>
				<select onChange={(e) => setLocation(e.target.value)}>
					<option value="constanta">Constanta</option>
					<option value="bucuresti">Bucuresti</option>
					<option value="brasov">Brasov</option>
				</select>
			</label>
			<button>Submit</button>
		</form>
	);
};

export default NewEventForm;
