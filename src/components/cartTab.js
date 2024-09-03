import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './cartItem'
import { toggleStatusTab, checkout } from '../stores/cart'

const CartTab = () => {
  const carts = useSelector(store => store.cart.items)
  const statustab = useSelector(store => store.cart.statusTab)
  const dispatch = useDispatch()

  const handleCloseTab = () => {
    dispatch(toggleStatusTab())
  }

  const handleCheckout = () => {
    dispatch(checkout())
  }

  return (
    <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px]
    transform transition-transform duration-500
    ${statustab ? '' : 'translate-x-full'}`}>
      <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
      <div className='p-5'>
        {carts.map((item, key) => 
          <CartItem key={key} data={item} />
        )}
      </div>
      <div className='grid grid-cols-2'>
        <button className='bg-black text-white' onClick={handleCloseTab}>CLOSE</button>
        <button className='bg-amber-600 text-white' onClick={handleCheckout}>CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartTab