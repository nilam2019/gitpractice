import React, { useEffect, useState } from "react";
import Customer from "./Customer";

function Customers(props) {
	const [formOpen, setFormOpen] = useState(false);
	const [email, setEmail] = useState(props.email);
	const [password, setPassword] = useState(props.password);
	const [name, setName] = useState(props.name);
	const [contact, setContact] = useState(props.contact);
	const [address, setAddress] = useState(props.address);

	useEffect(() => {
		if (!props.customers) {
			props.fetchCustomers();
		}
	});
	if (!props.customers) {
		return <div> There are no customers at the moment. </div>;
	}
	let customers = props.customers.map(ts => (
		<Customer
			key={ts._id}
			_id={ts._id}
			email={ts.email}
			name={ts.name}
			contact={ts.contact}
			address={ts.address}
			deleteCustomer={props.deleteCustomer}
			updateCustomer={props.updateCustomer}></Customer>
	));

	let dialog = (
		<dialog style={{ top: 0 }} open={formOpen}>
			<input
				type="text"
				value={email}
				placeholder="email"
				onChange={e => {
					setEmail(e.target.value);
				}}></input>
			<input
				type="Password"
				value={password}
				placeholder="password"
				onChange={e => {
					setPassword(e.target.value);
				}}></input>
			<input
				type="text"
				value={name}
				placeholder="name"
				onChange={e => {
					setName(e.target.value);
				}}></input>
			<input
				type="text"
				value={contact}
				placeholder="contact"
				onChange={e => {
					setContact(e.target.value);
				}}></input>
			<input
				type="text"
				value={address}
				placeholder="address"
				onChange={e => {
					setAddress(e.target.value);
				}}></input>
			Test{" "}
			<button
				onClick={() => {
					setFormOpen(false);
					props.createCustomer(email,password,name,contact,address);
					setEmail(null);
				}}>
				Create{" "}
			</button>{" "}
			<button
				onClick={() => {
					setFormOpen(false);
					setEmail(null);
				}}>
				Cancel{" "}
			</button>{" "}
		</dialog>
	);

	return (
		<div>
			<button
				onClick={() => {
					//   props.createCustomer("rahul_dummy_id_test_4");
					setFormOpen(true);
				}}>
				Create Customer{" "}
			</button>
			This is collections of customers {customers}{" "}
			{formOpen ? dialog : null}{" "}
		</div>
	);
}

export default Customers;
