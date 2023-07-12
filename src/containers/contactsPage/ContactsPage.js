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

	// to check for the duplicated name
	useEffect(() => {
		for (const contact of contacts) {
			if (contact.name === name) {
				setIsDuplicated(true);
			} else {
				return;
			}
		}
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		// next step based on isDuplicated
		if (isDuplicated) {
			alert("This contact already exits");
		} else {
			// this is the function from the prop
			AddContact(name, phone, email);
			// clean up with hand
			setName("");
			setPhone("");
			setEmail("");
		}

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
				<TileList tiles={contacts}/>
			</section>
		</div>
	);
};
