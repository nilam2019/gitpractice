//Action to get all customers
const getAllCustomers = () => {
	return dispatch => {
		fetch("/customer")
			.then(response => response.json())
			.then(json => dispatch({ type: "SET_CUSTOMERS", json }));
	};
};

//Action to get customer by id
const getCustomerById = id => {
	return dispatch => {
		fetch(`/customer/${id}`)
			.then(response => response.json())
			.then(json => console.log(json));
	};
};

//Action to create a customer
const createCustomer = (email, password, name, contact, address) => {
	return dispatch => {
		fetch(`/customer`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ email, password, name, contact, address })
		})
			.then(response => response.json())
			.then(newCustomer => {
				console.log(newCustomer);
				dispatch({ type: "ADD_NEW_CUSTOMER", newCustomer });
			});
	};
};

//Action for deleting a customer
const deleteCustomer = customerId => {
	return dispatch => {
		fetch(`/customer/${customerId}`, {
			method: "DELETE"
		})
			.then(response => response.json())
			.then(removedCustomer => {
				console.log(removedCustomer);
				dispatch({ type: "REMOVE_CUSTOMER", removedCustomer });
			});
	};
};

//Action for updating an existing customer
const updateCustomer = (
	customerId,
	email,
	password,
	name,
	contact,
	address
) => {
	return dispatch => {
		fetch(`/customer`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				customerId,
				email,
				password,
				name,
				contact,
				address
			})
		})
			.then(response => response.json())
			.then(json => {
				console.log(json);
				dispatch({
					type: "UPDATE_CUSTOMER",
					customerId,
					email,
					password,
					name,
					contact,
					address
				});
			});
	};
};

//Exporting action creaters
export default {
	getAllCustomers,
	getCustomerById,
	createCustomer,
	deleteCustomer,
	updateCustomer
};
