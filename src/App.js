import React, {useState} from "react";
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate} from "react-router-dom"
import Root, {ROUTES} from "./components/root/Root";
import {AppointmentsPage} from "./containers/appointmentsPage/AppointmentsPage";
import {ContactsPage} from "./containers/contactsPage/ContactsPage";

/*
@todo - Keep track of the contacts and appointments data, each being an array of objects.
@TODO - Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts.
@TODO - Define a callback function that, given a name, contact, date, and time, adds a new appointment object with that data to the array of appointments.
@TODO - Pass the array of contacts and the appropriate callback function as props to the `ContactsPage` component.
@TODO - Pass the appointments array, contacts array, and the add appointment function as props to the `AppointmentsPage` component.
*/
function App() {
	/*
    Define state variables for
    contacts and appointments
    */
	// for appointments
	const [appointment, setAppointment] = useState([]);

	// for contacts
	const [contact, setContact] = useState([]);

	/*
    Implement functions to add data to
    contacts and appointments
    */
	// for contacts
	const addContact = (name, phone, email) => {
		setContact(prevState => [...prevState, {name, phone, email}])
	}

	// for appointments
	const addAppointment = (title, contact, date, time) => {
		setAppointment(prevState => [...prevState, {title, contact, date, time}])
	}

	const router = createBrowserRouter(createRoutesFromElements(
		<Route path="/" element={<Root/>}>
			<Route index element={<Navigate to={ROUTES.CONTACTS} replace/>}/>
			<Route path={ROUTES.CONTACTS} element={<ContactsPage/> /* Add props to ContactsPage */}/>
			<Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage/> /* Add props to AppointmentsPage */}/>
		</Route>
	));

	return (
		<RouterProvider router={router}/>
	);
}

export default App;
