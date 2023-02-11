import React , {useContext, useEffect} from 'react'
import MealsIteam from './Title/MealsIteam'
import FloatMessage from './Title/FloatMessage'
import CardValue from "../Body/CardValue"
import FoodCard from './FoodCard'
import UserOrder from './userOrders/UserOrder'
import { DataStore } from '../../App'
function AppBody(props) {
     const ctx = useContext(DataStore)
      const { myOrderCount } = ctx
    useEffect(() => {
      const totalOrder = ctx.myOrder.length === 0 ? 0 : ctx.myOrder.map(cO => cO.count).reduce((a,b) => a+b)
      // console.log('props')
      return myOrderCount(totalOrder)
      
    },[ctx.myOrder , myOrderCount])
    
  // console.log('AppBody.jsx')   
  return (
    <React.Fragment>
        {ctx.cardOpen && <CardValue />}
        {ctx.addFoodCard && <FoodCard />}
        {ctx.orderList && <UserOrder userOrder = {props.userOrder} />}
        <FloatMessage />  
        {!ctx.orderList && !ctx.cardOpen && !ctx.addFoodCard && <MealsIteam />}
    </React.Fragment>
  )
}

export default AppBody
