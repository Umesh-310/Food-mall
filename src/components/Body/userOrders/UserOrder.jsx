import React from 'react'
import "./UserOrder.css"

const UserOrder = (props) => {
 
  const slides = document.querySelectorAll(".userslide");
  
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

let curSlide = 0;

let maxSlide = slides.length - 1;
console.log(slides)


const btnNext = () => {

  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }


  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
};


const prevSlide = () => {

  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
 
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
};

   

  return (
    <div className="slider myCssOnSlider">

  {props.userOrder.map((value) => {
    return (
      <div key={value.id} className="userslide">
    <div className='userInfo'>
    <div>{value.name}</div>
    <div>{value.email}</div>
    <div>{value.phone}</div>
    <div>{value.add}</div>
    <div>{value.cPin}</div>
    </div>
    <ul>
    <div className='order-list'>
      {value.food.map((foodvalue) => {
        return (
          <li key={foodvalue.id} className='meal userOrderMeal'>
          <h3>{foodvalue.name}</h3>
          <div className='price' > {foodvalue.count}</div>
          <div className='price' >{foodvalue.count * foodvalue.orignalPrice}</div>
      </li>
        )
      })}

      <li className='meal'>
          <div>Total</div>
          <div>{value.food.map(a => a.orignalPrice * a.count).reduce((a,b) => a+b)}</div>
      </li>
    </div>
    </ul>

  </div>
    )
  })}

  <button onClick={btnNext} className="btnSlider btn-next"> {">"} </button>
  <button onClick={prevSlide} className="btnSlider btn-prev">
    {'<'} </button>
</div>
  )
}

export default UserOrder

/*

 */
