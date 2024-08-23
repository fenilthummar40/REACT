import React, { useState } from 'react'
import ProductData from './ProductData'
import './style.css';
const Product = () =>{
  const[deatil,setDeatil] =useState([]);
  const [close,setClose] = useState(false)
  const deatilpage = (Product) =>{
    setDeatil([{...Product}])
    setClose(true)
  }
  
  return (
   <>

    {
      close ?

      <div className='detail_container'>
      <div className='detail_contant'>
    <button className='close' onClick={() => setClose(false)}>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
</svg></button>
        {
          deatil.map((x) =>{
            return(
               <>
              <div className='detail_info'>
                <div className='img-box'>
                  <img src={x.img}></img>
                </div>
                <div className='product_detail'>
                  <h2 id='v-1'>{x.Title }</h2>
                  <h3 className='f-1'> $ {x.price}</h3>
                  <p>{x.des}</p>
                  <button className='bu-1'>Add to cart</button>
                </div>
              </div>
              </>
            )
          })
        }
      </div>
    </div>:null
    }


   {/* <div className='detail_container'>
      <div className='detail_contant'>
    <button className='close' onClick={() => setClose(false)}>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
</svg></button>
        {
          deatil.map((x) =>{
            return(
              <>
              <div className='detail_info'>
                <div className='img-box'>
                  <img src={x.img}></img>
                </div>
                <div className='product_detail'>
                  <h2>{x.Title}</h2>
                  <h3> $ {x.price}</h3>
                  <p>{x.des}</p>
                  <button>Add to cart</button>
                </div>
              </div>
              </>
            )
          })
        }
      </div>
    </div> */}
   <div className='conatner'>
   
    {
      ProductData.map((el)=>{
        return(
          <div>
          <div className='box'>
            <div className='contant'>
              <div className='img-box'>
                <img src={el.img}></img>
              </div>
              <div className='deatil'>
                <div className='info'>
                  <h4>{el.Title}</h4>
                  <p> $ {el.price}</p>
                </div>  
                <button onClick={() => deatilpage (el)}>view</button>
              </div>
            </div>
          </div>
          
          </div>
        )
      })
    }
   </div>
   
   </>
  )
}

export default Product;