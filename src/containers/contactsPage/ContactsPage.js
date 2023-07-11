import React, {useState, useEffect} from "react";

import {ContactForm} from "../../components/contactForm/ContactForm";
import {TileList} from "../../components/tileList/TileList";


export const ContactsPage = (props) => {
	// received props
	const contacts = props.contacts;
	const AddContact = props.addContact;

	// useStates
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	// to store is the contact is duplicated
	const [isDuplicated, setIsDuplicated] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		/*
        Add contact info and clear data
        if the contact name is not a duplicate
        */

		// checking for duplicate contact
		// filter the array if theres any match
		contacts.filter((item) => {
			// checks the array item with use state name
			if (item.name === name) {
				// set the duplicated useState to true
				setIsDuplicated(true);
			} else {
				// set duplicated useState to false (just in case)
				setIsDuplicated(false);
			}
		})

		// next step based on isDuplicated
		if (isDuplicated) {
			alert("This contact already exits");
		} else {
			// this is the function from the prop
			AddContact(name, phone, email);
		}

		// clean up with hand
		setName(null);
		setPhone(null);
		setEmail(null);

	};
// handle name change
	const handleName = (e) => {
		setName(e.target.value);
	}

	// handle phone change
	const handlePhone = (e) => {
		setPhone(e.target.value);
	}

	// handle email change
	const handleEmail = (e) => {
		setEmail(e.target.value);
	}

	return (
		<div>
			<section>
				<h2>Add Contact</h2>
				{/*
        @todo: Insert the ContactForm.js and make it compatible
        */}
				<ContactForm name={name} setName={handleName} phone={phone} setPhone={handlePhone} email={email}
							 setEmail={handleEmail} handleSubmit={handleSubmit}/>
			</section>
			<hr/>
			<section>
				<h2>Contacts</h2>
				<TileList contact={contacts}/>
			</section>
		</div>
	);
};
