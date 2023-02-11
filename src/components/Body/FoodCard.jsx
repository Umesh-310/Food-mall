import React, { useContext, useRef } from 'react'
import "./FoodCard.css"
import useHttpFood from '../Context/useHttpFood';
import { DataStore } from '../../App'

const FoodCard = () => {
  const [sendData] = useHttpFood()
   const ctx = useContext(DataStore)
   const foodNameRef  = useRef();
   const foodDicRef  = useRef();
   const foodPriceRef  = useRef();
   const onSubmitAllValue = (event) => {
    event.preventDefault()
    const newFood = {
      name : foodNameRef.current.value,
      description : foodDicRef.current.value,
      price : foodPriceRef.current.value
    }
    sendData(`https://aku-310-default-rtdb.firebaseio.com/Food.json` ,'POST', newFood , true)

    foodNameRef.current.value = '';
    foodDicRef.current.value = '';
    foodPriceRef.current.value = '';
    ctx.onClickFoodCard(false)

   }
  return (
    <div className="popup food-container">  
  <form onSubmit={ onSubmitAllValue} id="contact" action="">
    <h3>Add Food</h3>
    <fieldset>
      <input placeholder="Food Name" ref={foodNameRef} type="text" tabIndex="2" required />
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your Food Discription Here...." ref={foodDicRef} tabIndex="3" required></textarea>
    </fieldset>
    <fieldset>
      <input placeholder="price" ref={foodPriceRef} type="tel" min = {0.01} tabIndex="4" required />
    </fieldset>
    <fieldset>
      <button name="submit" className='mx-1'  type="submit" id="contact-submit" >Submit</button>
      <button name="submit" className='mr-1' type="submit" onClick={() => ctx.onClickFoodCard(false)} id="contact-submit" >Cancel</button>
    </fieldset>
  </form>
 
  
</div>
  )
}

export default FoodCard