import React from 'react'
import './SuccessCheckout.css'
import image from './phonePay.jpeg'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

function SuccessCheckout() {
  const [check, setCheck] = useState(false);
  const history = useHistory();

  return (
    <div className='success'>
        <img src={image} className='qrcode'></img>
        <button className='successButton' onClick={() => setCheck(true)}>Place Order</button>
        <div className={`dropSuccess ${check && "drop__show"}`}>
            <img src="https://img.icons8.com/fluency/512/ok.png" alt="" className='success__final'/>
            <p>The transaction was successful. Order Placed🎉</p>
            <button className='successButton' onClick={() => history.push('/')}>Go Home</button>
        </div>
    </div>
  )
}

export default SuccessCheckout