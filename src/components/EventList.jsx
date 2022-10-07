import styles from "./EventList.module.css";

const EventList = ({ events, handleClick }) => {
	return (
		<div>
			{events.map((event, index) => {
				const { title, location, date, id } = event;
				return (
					<div className={styles.card} key={id}>
						<h2>
							{index} - {title}
						</h2>
						<p>
							{location} - {date}
						</p>
						<button onClick={() => handleClick(id)}>delete event</button>
					</div>
				);
			})}
		</div>
	);
};

export default EventList;
