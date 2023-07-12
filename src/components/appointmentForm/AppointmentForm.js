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
									name,
									setName,
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
				<label for="title">Name of the Appointment</label>
				<input type="text" name="title" id="title" onChange={(e) => setName(e.target.value)} value={name}
					   required/>
				<label for="contact">Select contact</label>
				<ContactPicker contacts={contacts} onChange={(e) => setContact(e.target.value)}
							   value={contact} name="contact"></ContactPicker>
				<label for="date">Date</label>
				<input type="date" name="date" id="date" onChange={(e) => setDate(e.target.value)} value={date}
					   required/>
				<label for="time">Time</label>
				<input type="time" name="time" id="time" onChange={(e) => setTime(e.target.value)} value={time}
					   required/>
				<input type="submit" name="submit" id="submit" value="Submit"/>
			</form>
		</>
	);
};
