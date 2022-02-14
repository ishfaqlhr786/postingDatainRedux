
import axios from 'axios'
import React,{useState} from 'react'
export const GetProductList = () => async (dispatch) => {
  const id=2

   try {
      dispatch({
        type: "PRODUCT_LIST_LOADING",
      });
  
      const res = await axios.get(
        `https://fakestoreapi.com/products`
      )
  // console.log(res.count())
     dispatch({
        type: "PRODUCT_LIST_SUCCESS",
        payload: res.data,
       // count:res.count
     
      });
      
      
    } catch (e) {
      console.log(e.message, "error");
      dispatch({
        type: "PRODUCT_LIST_FAIL",
      });
    }

  };
 // const product='Mens Cotton Jacket'
  export const GetProduct = (product) => async (dispatch) => {
    try {
      dispatch({
        type: "PRODUCT_MULTIPLE_LOADING",
      });
      const res = await axios.get(`https://fakestoreapi.com/products/${product}`);
      console.log(res.data)
      dispatch({
        type: "PRODUCT_MULTIPLE_SUCCESS",
        payload: res.data,
        product: product,
      });
    } catch (e) {
      console.log(e.message, "error");
      dispatch({
        type: "PRODUCT_MULTIPLE_FAIL",
      });
    }
  };
  