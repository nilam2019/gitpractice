import { connect } from "react-redux";
import Customers from "../components/Customers";
import customersActions from "../actions/Customer";

const mapStateToProps = (state /*, ownProps*/) => {
	return {
		customers: state.customers.all
	};
};

const mapDispatchToProps = {
	fetchCustomers: customersActions.getAllCustomers,
	createCustomer: customersActions.createCustomer,
	deleteCustomer: customersActions.deleteCustomer,
	updateCustomer: customersActions.updateCustomer
};

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
