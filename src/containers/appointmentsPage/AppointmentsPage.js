import React, {useState} from "react";

import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm";
import {TileList} from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
	// received props
	const conctact = props.contacts;
	const appointments = props.appointments;
	const addAppointment = props.addApointment;

	// internal states
	const [name, setName] = useState("");
	const [currentContact, setCurrentContact] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// save appointment
		addAppointment(name, currentContact, date, time);
		// clean up
		setName("");
		setCurrentContact("");
		setDate("");
		setTime("");
	};

	return (
		<div>
			<section>
				<h2>Add Appointment</h2>
				{/*Form comopent*/}
				<AppointmentForm name={name} contact={currentContact} date={date} time={time}
								 setContact={setCurrentContact} setName={setName} setDate={setDate} setTime={setTime}
								 handleSubmit={handleSubmit}/>
			</section>
			<hr/>
			<section>
				<h2>Appointments</h2>
				{/* Tilelist */}
				<TileList appointments={appointments}/>
			</section>
		</div>
	);
};