import React from "react";

// gets the props by an object
export const ContactForm = ({
								name,
								setName,
								phone,
								setPhone,
								email,
								setEmail,
								handleSubmit
							}) => {
	// the from (tweaked)
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label for="nameInput">Name</label>
				<input type="text" name="nameInput" id="nameInput" required onChange={setName} value={name}/>
				<br/>
				<label for="phoneInput">Phone</label>
				<input type="tel" name="phoneInput" id="phoneInput" required onChange={setPhone} value={phone}
					   pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"/>
				<br/>
				<label for="emailInput">Email</label>
				<input type="email" name="emailInput" id="emailInput" required onChange={setEmail} value={email}/>
				<br/>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

/*
EX ContactsPage's form (by Me)

<form onSubmit={handleSubmit}>
					<label for="nameInput">Name</label>
					<input type="text" name="nameInput" id="nameInput" required onChange={handleName} value={name}/>
					<br/>
					<label for="phoneInput">Phone</label>
					<input type="text" name="phoneInput" id="phoneInput" required onChange={handlePhone} value={phone}/>
					<br/>
					<label for="emailInput">Email</label>
					<input type="email" name="emailInput" id="emailInput" required onChange={handleEmail}
						   value={email}/>
					<br/>
					<button type="submit">Submit</button>
				</form>
*/