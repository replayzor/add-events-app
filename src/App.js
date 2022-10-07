import React, { useState } from "react";

import "./index.css";
import "./App.css";

import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
	const [showModal, setShowModal] = useState(false);
	const [showEvents, setShowEvents] = useState(false);
	const [events, setEvents] = useState([]);
	console.log(events);

	const addEvent = (event) => {
		setEvents((prevEvents) => {
			return [...prevEvents, event];
		});
		setShowModal(false);
	};

	const handleClick = (id) => {
		setEvents((prevEvents) => {
			return prevEvents.filter((event) => {
				return id !== event.id;
			});
		});
	};

	const subtitle = "All my latest events";

	return (
		<div className="App">
			<Title title="My events" subtitle={subtitle} />
			{showEvents && (
				<div>
					<button onClick={() => setShowEvents(false)}>hide events</button>
				</div>
			)}
			{!showEvents && (
				<div>
					<button onClick={() => setShowEvents(true)}>show events</button>
				</div>
			)}
			{showEvents && <EventList events={events} handleClick={handleClick} />}
			{showModal && (
				<Modal isSalesModal={true}>
					<NewEventForm addEvent={addEvent} />
				</Modal>
			)}
			<div>
				<button onClick={() => setShowModal(true)}>Add New Event</button>
			</div>
		</div>
	);
}

export default App;
