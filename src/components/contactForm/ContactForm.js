import React from "react";

/*
@todo: implement the form (like the ploblem asked)
*/
export const ContactForm = ({
								name,
								setName,
								phone,
								setPhone,
								email,
								setEmail,
								handleSubmit
							}) => {
	return (
		<></>
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