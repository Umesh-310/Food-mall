import React from 'react'
import "./OrderForm.css"
function OrderForm(props) {
  return (
    <div className="containerForm">
  <div className="title">Registration
  {props.err.name.includes('form') && <span className="error-messg">{props.err.errMsg}</span>}
  </div>
  <form onSubmit={ props.onsubmitHandler }  action="#">
    <div className="user__details">
      <div className="input__box">
        <span className="details">Full Name</span>
        <input value = {props.name} type="text" onChange={props.onNameChange} placeholder="E.g: Umesh Saini"  />
         {props.err.name.includes('name') && <span className="error-messg">{props.err.errMsg}</span>}
      </div>
      <div className="input__box">
        <span className="details">Username</span>
        <input value = {props.userName} type="text" onChange={props.onUserNameChange} placeholder="Umesh310"  />
        {props.err.name.includes('userName') && <span className="error-messg">{props.err.errMsg}</span>}
      </div>
      <div className="input__box">
        <span className="details">Email</span>
        <input value = {props.email} type="email" onChange={props.onEmailChange} placeholder="UmeshSaini@example.com"  />
        {props.err.name.includes('email') && <span className="error-messg">{props.err.errMsg}</span>}
      </div>
      <div className="input__box">
        <span className="details">Phone Number</span>
        <input value = {props.phone} type="number" onChange={props.onPhoneChange} placeholder="XXXXXXXXXX"  />
        {props.err.name.includes('phone') && <span className="error-messg">{props.err.errMsg}</span>}
      </div>
      <div className="input__box">
        <span className="details">Address</span>
        <input value = {props.add} type="text" onBlur={props.onAddChange} onChange={props.onAddChange} placeholder="Address"  />
        {props.err.name.includes('address') && <span className="error-messg">{props.err.errMsg}</span>}
      </div>
      <div className="input__box">
        <span className="details">PinCode</span>
        <input value = {props.cpin} type="Number" onBlur={props.onCheckPinCode} onChange={props.onCheckPinCode} placeholder="458664"  />
        {props.err.name.includes('Cpin') && <span className="error-messg">{props.err.errMsg}</span>}
      </div>

    </div>
    <div className="gender__details">
      {/* <input type="radio" name="gender" value="male" id="dot-1"  =" "/> */}
      <input type="radio" name="gender" onClick={props.onRadio} id='dot-1' value="Cash" />
      <input type="radio" name="gender" onClick={props.onRadio} value="GPay" id='dot-2' />
      <input type="radio" name="gender" onClick={props.onRadio} value="other" id='dot-3' />
      <span className="gender__title">Gender</span>
      <div className="category">
        <label htmlFor="dot-1">
          <span className="dot one"></span>
          <span>Cash</span>
        </label>
        <label htmlFor="dot-2">
          <span className="dot two"></span>
          <span>GPay</span>
        </label>
        <label htmlFor="dot-3">
          <span className="dot three"></span>
          <span>Other Online App</span>
        </label>
      </div>
      {/* {props.err.name.includes('gender') && <span className="error-messg">{props.err.errMsg}</span>} */}
    </div>
    <div className="button">
      <input type="submit" value="Lock Order"/>
    </div>
  </form>
</div>
  )
}

export default OrderForm