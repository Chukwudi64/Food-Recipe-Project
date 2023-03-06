import PaystackPop from '@paystack/inline-js'
import { useState } from 'react';
import { useCart } from 'react-use-cart'




// The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  


const PaystackIntegation = () => {
    const {
        cartTotal
} = useCart();
console.log(cartTotal);
const [email,setEmail] = useState("")
const [address,setAddress] = useState("")
const [fullname,setFullname] = useState("")
const [amount,setamount] = useState(cartTotal)
console.log(amount);
const paywithpaystack = (e) =>{ 
    e.preventDefault()
    const paystack = new PaystackPop()
    paystack.newTransaction({
        key:"pk_test_e5b2c9d66ca4d19c15cc03c9579fd175d80ca08a",
        amount:amount * 100,
        email,
        fullname,
        address,
        onSuccess(transaction){
            let message = ` Good Job! Payment Complete! Reference ${transaction.reference}`
            alert(message)
            setEmail("")
            setAddress("")
            setFullname("")
            setamount("")
        },
        onCancel(){
            alert(" You Have Canceled the Transaction")
        }
     })
}

  return (
        <div className="gloat">
            
    <div className='Main'>
        <div className='Dept'>
            <h3>Make Payment.</h3>
        </div>
        <span className='spa'>Make Payment</span>
        <div className='semi-main'>
        <form id="paymentForm" className='dior'>
            <div className="form-group">
             <label for="email">Email Address</label>
             <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} id="email-address" />
             </div>
             <div className="form-group">
            <label for="address">Address</label>
            <input type="text" placeholder='Enter Address' value={address} onChange={(e)=>setAddress(e.target.value)} id="address" />
             </div>
            <div className="form-group">
                <label for="fullname">Full Name</label>
                <input type="text" placeholder='Enter fullName' value={fullname} onChange={(e)=>setFullname(e.target.value)}  id="full-name" />
            </div>
            <div className="form-submit">
             <button type="submit" onClick={paywithpaystack}> Pay </button>
             <a class="h-c-button h-c-button--flat" href="https://accounts.google.com/SignUp?continue=https://myaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button" title="Create an account" className='create'>Create an Account</a>
         
            </div>
        </form>
        </div>

    </div>
        </div>
   )
}

export default PaystackIntegation;