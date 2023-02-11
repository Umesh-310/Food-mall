import React, { useContext } from 'react'
import { DataStore } from '../../App'
import backImg from "../img/meals.jpg"
import NavCardBtn from './NavCardBtn'
function Nav(props) {
    const ctx = useContext(DataStore)
  // console.log('Nav.jsx')
  return (<React.Fragment>
    <nav className="navbar bg-body-tertiary">
     <div className="container-fluid">
      <b className="navbar-brand nav-margin">FoodMall</b>

      <NavCardBtn
      icon = "🛒 "
      text = "Your Card" 
      cardOrder = {ctx.cardOrder}
      onClick = {ctx.onCloseCard}/>

      <NavCardBtn
      icon = "😎 "
      text = "Add food iteam" 
      cardOrder = {0}
      onClick = {ctx.onClickFoodCard}/>

      <NavCardBtn
      icon = "⌚ "
      text = "total Order" 
      cardOrder = {0}
      onClick = {ctx.onOrderList}/>


      </div>
  </nav>
  <div className="main-image">
    <img src = {backImg} alt= "A food Pic" />
  </div>
  
</React.Fragment>
  )
}

export default React.memo(Nav)