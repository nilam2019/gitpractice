const getAllCart = (cart) => {
    return dispatch => {
        fetch("/cart/"+cart)
        .then(response => response.json())
        .then(all_cart => dispatch({type:"SET_CART",all_cart}));
    };
};
export default{
    getAllCart
}