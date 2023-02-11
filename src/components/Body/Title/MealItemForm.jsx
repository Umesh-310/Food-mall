import React, { useState , useContext } from 'react'
import { DataStore } from '../../../App'
function MealItemForm(props) {
   const [count, setCount] = useState(0)
const ctx = useContext(DataStore)
    
    const onSubmitHandler = async (event) => {
        event.preventDefault()
        if(count > 0){
            const newData = {
                id : props.avaMeal.id,
                name : props.avaMeal.name,
                count : count,
                orignalPrice : props.avaMeal.price
            }
            ctx.onsetMyOrder(newData)


        }
        setCount(0) 
    }
    const onsubtract = () => {
        if(count > 0){
            setCount(count - 1)
        }
        }
    const onsAdding = () => {
        if(count < 5){
            setCount(count + 1)
        }
        }
//   console.log('MealItemForm.jsx')
  return (
        <form onSubmit={onSubmitHandler}>
            <button type='button' className='btn btn-outline-success' onClick={onsubtract}><b>-</b></button>
            <b className='m-3'>{count}</b>
            <button type='button' className='btn btn-outline-success' onClick={onsAdding}><b>+</b></button> 
            <div>
            <button type='submit' className='btn btn-outline-success m-2 px-4' > + Add</button>
            </div>
        </form>
  )
}

export default React.memo(MealItemForm)