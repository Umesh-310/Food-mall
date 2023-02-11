import React , { useContext, useState }from 'react'
import { DataStore } from '../../App'
import FormValid from './orderForm/FormValid'
function CardValue(props) {
    const [showOrderForm , setShowOrderForm] = useState(false);
      const ctx = useContext(DataStore)
    const Total = ctx.myOrder >= 0 ? [0] : (ctx.myOrder.map(a => a.orignalPrice * a.count))
    const onsubtract = (event) => {
       ctx.onsetMyOrder({
        id : event.target.id ,
        true : true,
        min : true
        })
        }
    const onAdding = (event) => {
        ctx.onsetMyOrder({
        id : event.target.id ,
        true : true,
        plus : true
        })
        }
        // console.log('CardValue.jsx')
        const showOrderForms = () => {
          !(ctx.myOrder.length === 0) && setShowOrderForm((prs) => !prs)
        }
  return (
    <React.Fragment>
   <div className='popup card-value'>
                <ul>
             {ctx.myOrder.length === 0
                ? <center className='m-5'><b>Nothing to Show</b></center>
                :( ctx.myOrder.map((avaMeal) => {
             return (
            <li key={avaMeal.id} className='meal'>
               <div >
                    <h3>{avaMeal.name}</h3>
                    <div className='price'>{`₹ ${(avaMeal.count * avaMeal.orignalPrice).toFixed(2)}`}</div>
               </div>
                    <div className='price'>
                        <button onClick={onsubtract} id={avaMeal.id} className='btn btn-success m-1' > - </button>
                        <b>x{avaMeal.count}</b>
                        <button onClick={onAdding} id={avaMeal.id} className='btn btn-success m-1' > + </button>
                    </div>
            </li>
            );
            }))}
                <li className='meal'>
                 <h3>Total</h3>
                 <div className='price'>{`₹ ${Total.reduce((a,b) => a+b).toFixed(2)}`}</div>
                </li>
          
            <li className='meal'>
                 <button onClick={() => ctx.onCloseCard(false)} className='btn btn-success px-5'> Cancel</button>
                 <button onClick={showOrderForms} className='btn btn-success mx-5 px-5'> Order 😋</button>
            </li>
        </ul>
        {showOrderForm && <FormValid />}
      </div>
       
        </React.Fragment>
  )
}

export default CardValue