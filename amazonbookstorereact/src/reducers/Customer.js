import * as _ from "lodash";

const initialState = {
	all: undefined
};

const customerReducer = (state = initialState, action) => {
	let newState;
	switch (action.type) {
		case "SET_CUSTOMERS":
			newState = _.cloneDeep(state);
			newState.all = action.json;
			return newState;
		case "ADD_NEW_CUSTOMER":
			newState = _.cloneDeep(state);
			newState.all.push(action.newCustomer);
			return newState;
		case "REMOVE_CUSTOMER":
			newState = _.cloneDeep(state);
			_.remove(newState.all, { _id: action.removedCustomer._id });
			return newState;
		case "UPDATE_CUSTOMER":
			newState = _.cloneDeep(state);
			let toBeUpdated = _.find(newState.all, { _id: action.customerId });
			if (toBeUpdated) {
				toBeUpdated.email = action.email;
				toBeUpdated.password = action.password;
				toBeUpdated.name = action.name;
				toBeUpdated.contact = action.contact;
				toBeUpdated.address = action.address;
			}
			return newState;

		default:
			return state;
	}
};

export default customerReducer;
