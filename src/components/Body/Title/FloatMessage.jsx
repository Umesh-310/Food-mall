import React from 'react'

function FloatMessage() {
  // console.log('FloatMessage.jsx')
  return (
    <div className='popup float-message'>
        <h2>Delicious Food, Delivered To You</h2><br />
        <p>Choose your favorite meal from our broad selection of available meals and emjoy a declicious linch or dinner at home.</p>
        <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs! </p>
    </div>
  )
}

export default React.memo(FloatMessage)