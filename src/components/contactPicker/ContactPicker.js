import React from "react";

export const ContactPicker = ({contacts, onChange, value, name}) => {
	return (
		<>
			<select name={name} value={value} onChange={onChange}>
				<option value="" key={"-1"}>No Contact selected</option>
				{contacts.map((contact) => {
					<option value={contact} key={contact}>{contact}</option>
				})}
			</select>
		</>
	);
};
