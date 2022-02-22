import React,{useState,useEffect} from 'react'
import {Link,useHistory}  from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { CreateProductNew, GetProduct } from "../actions/ProductActions";
import {GetProductList} from '../actions/ProductActions'
import { propertyOf } from 'lodash';
export const CreateProduct = (props) => {
    // const name=props.name
    // console.log(name)
    const history=useHistory()
    const [title1,setTitle] = useState("")
    const [ProductId,setPid]=useState()
   const [postData,setPostdata]=useState({
      // id:null,
       title:""
   })
    const dispatch=useDispatch();
   const postData1=useSelector((state)=> state.CreateProduct)
   const products=useSelector((state)=> state.ProductList)
   console.log(products)
    console.log(postData1)
  console.log(postData1.data.id)
  console.log(postData1.data.title)
  
 
const handleSubmit=(e)=>{
  e.preventDefault();
  
   
  //dispatch(createPosts(postData))
  dispatch(CreateProductNew(postData))
 
   
    
}
useEffect(()=>{
   
    dispatch(GetProductList())
},[dispatch])

    return (
        <div>
            <Link to="/ProductList">Products</Link>
            <form onSubmit={handleSubmit}>
            <label>Product id</label>
          
               
                <label>Title</label>
                <input type="text" value={postData.title} onChange={(e)=>setPostdata({...postData,title:e.target.value})}  />
                <br/>
                
                <br/>
                <input type="submit" value="CReate product"/>

            </form>
            <h2>
                {postData1.data.id}
                {postData1.data.title}
            </h2>
           
        
        </div>
    )
}
