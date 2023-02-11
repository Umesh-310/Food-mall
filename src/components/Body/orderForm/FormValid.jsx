import React, { useContext, useReducer, useState } from 'react'
import { DataStore } from '../../../App';
import useHttpFood from '../../Context/useHttpFood';
import OrderForm from './OrderForm';
const initialState = {
                        name : '',
                        errMsg : '',
                        error : false
                        }
  
const isEmapty = (state , action ) => {
  if(action.type === 'Error'){

    return {
      name : action.val.name,
      errMsg : action.val.errMsg,
      error : true,
    };
  }
  else if(action.type === 'NO-Error'){
    return {
      name : "",
      errMsg : '',
      error : false,
    };
  }
  }


function FormValid() {
    const [sendData] = useHttpFood()
  const ctx = useContext(DataStore)
  const [userInputSatat , dispacth ] = useReducer(isEmapty , initialState)

  const [name , setName] = useState('');
  const [userName , setUserName] = useState('');
  const [email , setEmail] = useState('');
  const [phone , setPhone] = useState('');
  const [add , setAdd] = useState('');
  const [gender , setGender] = useState('');
  const [cPin , setCpin] = useState('');

    

  const onsubmitHandler = event => {
        event.preventDefault()
    if(name.length !== 0 && userName.length !== 0 &&
        email.length !== 0 && phone.length !== 0 &&
        add.length !== 0 && gender.length !== 0 &&
        cPin.length !== 0
    ){
        const userInfo = {
        name,
        userName,
        email,
        phone,
        add,
        gender,
        cPin,
    }
    const food = ctx.myOrder;
      sendData(`https://aku-310-default-rtdb.firebaseio.com/order.json`,'POST',{userInfo,food} , true , "")

    ctx.clearMyOrders()
    setName('')
    setUserName('')
    setEmail('')
    setPhone("")
    setAdd('')
    setGender('')
    setCpin('')
    }
    else {
         dispacth({ val : {name : 'form', errMsg : 'Please fill All the filed.'}, type : 'Error'})
    }
  }
  const onNameChange = (event) => {
    setName(event.target.value)
    if(event.target.value.length === 0 ){
      dispacth({val : {name : 'name', errMsg : 'Please fill in this filed.'}, type : 'Error'})
    }
    else if(!(/[A-Za-z]/g.test(event.target.value))) {
    dispacth({val : {name : 'name', errMsg : 'only a-z,A-Z are allow'}, type : 'Error'})
    }
    else if(/\b^[A-Za-z]+[\s]{0,1}[A-Za-z]+\s?$\b/gm.test(event.target.value)) {
      dispacth({type : 'NO-Error'})
    }
     else if (/\b[A-Za-z]+\b/gm.test(event.target.value) && event.target.value.length > 1) { 
     dispacth({val : {name : 'name', errMsg : 'Please enter full Name or remove space and enter valid name'}
     , type : 'Error'})
     }
    else{
       dispacth({val : {name : 'name', errMsg : 'Please check the input!'}, type : 'Error'})
    }
   
  }
  const onUserNameChange = (event) => {
    setUserName(event.target.value)
    if(event.target.value.length < 6 || event.target.value.length > 20){
      dispacth({val : {name : 'userName', errMsg : `Please fill in this filed. \n min = 6 and max = 20 ` }, type : 'Error'})
    }
    else if(!(/\b^[A-Za-z]+[0-9]{0,10}$\b/g.test(event.target.value))) {
    dispacth({val : {name : 'userName', errMsg : 'only a-z,A-Z and 0-9 are allow'}, type : 'Error'})
    }
    else{
       dispacth({type : 'NO-Error'}) 
    }
  }
  const onEmailChange = (event) => {
    setEmail(event.target.value)
    if(( /\b^\w[a-z0-9]+\.?[a-z0-9]+\.?[a-z0-9]+\.?[a-z0-9]+@[a-z]+\.[a-z]{2,3}$\b/gm.test(event.target.value.toLowerCase()))){
      dispacth({type : 'NO-Error'})
     }else {
         dispacth({val : {name : 'email', errMsg : `only a-z,A-Z,0-9 and '.' are allow \n enter valid email `}, type : 'Error'})
     }
  }
  const onPhoneChange = (event) => {
     setPhone(event.target.value)
     if(!(/\b^[6-9]{1}[0-9]{9}$\b/g.test(event.target.value))) {
    dispacth({val : {name : 'phone', errMsg : 'Number Shoud strat with 6-9 \n lenth shoud be 10'}, type : 'Error'})
    } else{
       dispacth({type : 'NO-Error'})
    }
  }
  const onAddChange = (event) => {
    setAdd(event.target.value)
    if(event.target.value.length === 0 ){
      dispacth({val : {name : 'address', errMsg : 'Please fill in this filed.'}, type : 'Error'})
    }
    else {
        dispacth({type : 'NO-Error'})
    } 

  }
  const onCheckPinCode = (event) => {
    setCpin(event.target.value)
     if(event.target.value.length < 6 || event.target.value.length > 6){
      dispacth({val : {name : 'Cpin', errMsg : 'pleace fill Correct value'}, type : 'Error'})
      }
     else {
      dispacth({type : 'NO-Error'})
     }
  }
  const onRadio = (event) => {
    setGender(event.target.value)
    dispacth({type : 'NO-Error'})
    
  }
  return (
    <OrderForm
        onsubmitHandler = {onsubmitHandler}
        onNameChange = {onNameChange}
        onUserNameChange = {onUserNameChange}
        onEmailChange = {onEmailChange}
        onPhoneChange = {onPhoneChange}
        onAddChange = {onAddChange}
        onCheckPinCode = {onCheckPinCode}
        name = {name}
        userName = {userName}
        email = {email}
        phone = {phone}
        add = {add}
        gender = {gender}
        cPin = {cPin}
        onRadio = {onRadio}
        err = {userInputSatat}
    />
  )
}

export default FormValid