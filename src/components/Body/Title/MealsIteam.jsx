import React , { useCallback, useEffect, useState } from 'react'
import useHttpFood from '../../Context/useHttpFood';
import MealItemForm from './MealItemForm';

function MealsIteam(props) {
   
  const [dummyMeals , setDummyMeals ] =  useState([])
  const [ sendData ,  isLoading , error  ] = useHttpFood()
  
  const getData = useCallback(async () => {
    
    
    
   const applyData = data => { 
    const foodList = [];
    for (const key in data) {
      foodList.push({
        id : key,
        name : data[key].name,
        description : data[key].description,
        price : data[key].price
      })
    }
        setDummyMeals(foodList) 
    }
    sendData('https://aku-310-default-rtdb.firebaseio.com/Food.json','GET',"",false, applyData )

  } , [sendData])
  useEffect(() => {
      getData();
  },[getData])
      
  // console.log('MealsIteam.jsx')
  const show = (
                <ul>
                     {dummyMeals.map((avaMeal) => {
                     return (
                    <li key={avaMeal.id} className='meal'>
                       <div >
                            <h3>{avaMeal.name}</h3>
                            <div className='description'>{avaMeal.description}</div>
                            <div className='price'>{`₹ ${avaMeal.price}`}</div>
                       </div>
                       <div>
                            <MealItemForm avaMeal = {avaMeal}  />
                       </div>
                    </li>
                    );
                    })}
                </ul>
               )
  const message = (isLoading ? <p>Loading.....</p> : (error ? <p>{error}</p> : false))

  return (
    <div className='container'> 
       {message ? message : show}

    </div>
  )
}

export default React.memo(MealsIteam)