import React from "react";
import { useCart } from "react-use-cart";
import img from '../src/img/food.webp'
// import PaystackPop from '@paystack/inline-js'
import { useState } from 'react';

function Cart(props) {

// The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  
// const PaystackIntegation = () => {
// const [email,setEmail] = useState("")
// const [amount,setamount] = useState("")
// const [firstname,setFirstname] = useState("")
// const [lastname,setLastname] = useState("")
// const [department,setDepartment] = useState("")

// const paywithpaystack = (e) =>{ 
//     e.preventDefault()
//     const paystack = new PaystackPop()
//     paystack.newTransaction({
//         key:"pk_test_e5b2c9d66ca4d19c15cc03c9579fd175d80ca08a",
//         amount:amount * 100,
//         email,
//         firstname,
//         lastname, 
//         onSuccess(transaction){
//             let message = ` Good Job! Payment Complete! Reference ${transaction.reference}`
//             alert(message)
//             setEmail("")
//             setFirstname("")
//             setLastname("")
//             setamount("")
//             setDepartment("")
            
//         },
//         onCancel(){
//             alert(" You Have Canceled the Transaction")
//         }
//      })
// }
// }

  const { // we are getting from line 43 to 50 from react-use-cart that we already installed
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart(); 
  if (isEmpty) {
    return <h1 className="text-center">your cart is empty</h1>;
  }
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12"> 
          <h5> 
            Cart {totalUniqueItems} total Items: ({totalItems})
             {/* totalUniqueItems and totalItems is been gotten from react-use-cart */}
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
               
                return (
                  <tr key={index}>
                    <td>
                      <img src={img} style={{ height: "6rem" }} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quantity : ({item.quantity})</td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove Item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Total Price: $ {cartTotal}</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            Clear Cart
          </button>
          <a href="/payment" className="btn btn-primary m-2" >Pay Now</a>
        </div>
       </div>
    </section>
  );
}

export default Cart;