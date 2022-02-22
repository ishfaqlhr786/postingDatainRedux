
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
  export const CreateProductNew = (postData) => async (dispatch) => {
   // return axios.post(`https://fakestoreapi.com/products/`,postData)
   
    try {
      dispatch({
        type: "PRODUCT_CREATE_POSTING",
      });
     
    const res=await axios.post(`https://fakestoreapi.com/products/`,postData)
    console.log(res.data)
      dispatch({
        type: "PRODUCT_CREATE_SUCCESS",
       // response: res.data,
        payload: res.data,
     // response: postData,
      });
    } catch (e) {
      console.log(e.message, "error");
      dispatch({
        type: "PRODUCT_CREATE_FAIL",
      });
    }
  };
  export function createPosts(postData) {

    return dispatch => { //return function
      return axios.post(`https://fakestoreapi.com/products/`,{postData}) //return post request response
      .then((data) => { //pass data in as a parameter, call the callback, dispatch the action. 
         //callback();
         console.log(data)
  console.log(data)
        dispatch({
          type: "PRODUCT_CREATE_SUCCESS1",
          payload: data
        })
      })
    }
  }