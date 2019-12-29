import {connect} from "react-redux";
import AmazonBook from "../components/amazonbook";
import BookActions from "../actions/Book";

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        book: state.book.book
    };
};
const mapStateToProps = {
    fetchBook:BookActions.getAllBook
};

export default connect(mapStateToProps, mapDispatchToProps)(AmazonBook);