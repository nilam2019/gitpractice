import React, { useState } from "react";

function Customer(props) {
	const [email, setEmail] = useState(props.email);
	const [password, setPassword] = useState(props.password);
	const [name, setName] = useState(props.name);
	const [contact, setContact] = useState(props.contact);
	const [address, setAddress] = useState(props.address);
	return (
		<div style={{ margin: "10px" }}>
			<div>
				<input
					style={{ width: "70%" }}
					type="text"
					value={email}
					onChange={e => {
						setEmail(e.target.value);
					}}></input>
			</div>
			<div>
				<input
					style={{ width: "70%" }}
					type="text"
					onChange={e => {
						setPassword(e.target.value);
					}}></input>
			</div>
			<div>
				<input
					style={{ width: "70%" }}
					ype="text"
					value={name}
					onChange={e => {
						setName(e.target.value);
					}}></input>
			</div>
			<div>
				<input
					style={{ width: "70%" }}
					ype="text"
					value={contact}
					onChange={e => {
						setContact(e.target.value);
					}}></input>
			</div>
			<div>
				<input
					style={{ width: "70%" }}
					ype="text"
					value={address}
					onChange={e => {
						setAddress(e.target.value);
					}}></input>
			</div>
			<button
				disabled={
					props.email === email &&
					props.password === password &&
					props.name === name &&
					props.contact === contact &&
					props.address === address
				}
				onClick={() => {
					props.updateCustomer(props._id,email,password,name,contact,address);
				}}>
				Update
			</button>
			<button
				onClick={() => {
					props.deleteCustomer(props._id);
				}}>
				Delete
			</button>
		</div>
	);
}

export default Customer;
