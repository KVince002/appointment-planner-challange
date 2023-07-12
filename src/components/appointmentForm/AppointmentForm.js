import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker";

const getTodayString = () => {
	const [month, day, year] = new Date()
		.toLocaleDateString("en-US")
		.split("/");
	return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
									contacts,
									title,
									setTitle,
									contact,
									setContact,
									date,
									setDate,
									time,
									setTime,
									handleSubmit
								}) => {

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label for="title">Title of the Appointment</label>
				<input type="text" name="title" id="title" onChange={setTitle((e) => e.target.value)}/>
				<ContactPicker contacts={contact}></ContactPicker>
				<label for="date">Date</label>
				<input type="date" name="date" id="date" onChange={setDate((e) => e.target.value)}/>
				<label for="time">Time</label>
				<input type="time" name="time" id="time" onChange={setTime((e) => e.target.value)}/>
				<input type="submit" name="submit" id="submit" value="Submit"/>
			</form>
		</>
	);
};
