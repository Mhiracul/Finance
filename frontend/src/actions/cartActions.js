import axios from "axios";

// Action Types
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAIL = "ADD_TO_CART_FAIL";
export const VIEW_CART_SUCCESS = "VIEW_CART_SUCCESS";
export const VIEW_CART_FAIL = "VIEW_CART_FAIL";
export const INCREASE_QUANTITY_SUCCESS = "INCREASE_QUANTITY_SUCCESS";
export const INCREASE_QUANTITY_FAIL = "INCREASE_QUANTITY_FAIL";

// Add a product to cart
export const addToCart = (productId, accessToken) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const res = await axios.post(
        `https://ceeman-back.onrender.com/api/cart/${productId}/add`,
        {},
        config
      );
      dispatch({ type: ADD_TO_CART_SUCCESS, payload: res.data });
      // Optionally, fetch updated cart or show success message
    } catch (error) {
      dispatch({
        type: ADD_TO_CART_FAIL,
        payload: error.response.data.message,
      });
    }
  };
};

// View cart items
export const viewCart = (accessToken) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const res = await axios.get(
        "https://ceeman-back.onrender.com/api/cart/view",
        config
      );
      dispatch({ type: VIEW_CART_SUCCESS, payload: res.data.cartItems });
    } catch (error) {
      dispatch({ type: VIEW_CART_FAIL, payload: error.response.data.message });
    }
  };
};

// Increase quantity of an item in cart
export const increaseCartItemQuantity = (cartItemId, amount, accessToken) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const res = await axios.post(
        `https://ceeman-back.onrender.com/api/cart/${cartItemId}/increase`,
        { amount },
        config
      );
      dispatch({ type: INCREASE_QUANTITY_SUCCESS, payload: res.data });
      // Optionally, fetch updated cart or show success message
    } catch (error) {
      dispatch({
        type: INCREASE_QUANTITY_FAIL,
        payload: error.response.data.message,
      });
    }
  };
};
