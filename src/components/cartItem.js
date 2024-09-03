import React, { useState, useEffect } from 'react'
import { products } from '../products'
import { useDispatch } from 'react-redux'
import { changeQuantity } from '../stores/cart'

const CartItem = (props) => {
    console.log(props)
    const {productId, quantity} = props.data
    const [detail, setDetail] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const findDetail = products.filter(product => product.id === productId)[0]
        setDetail(findDetail)
    }, [productId])

    const handleQuantity = (type) => {
        dispatch(changeQuantity({
            productId: productId,
            quantity: type === 'plus' ? quantity + 1 : quantity - 1
        }))
    }

    return (
        <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
            <img src={detail.image} alt={detail.name} className='w-12'/>
            <h3>{detail.name}</h3>
            <p>${detail.price * quantity}</p>
            <div className='w-20 flex justify-between gap-2'>
                <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={() => handleQuantity('minus')}>-</button>
                <span>{quantity}</span>
                <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={() => handleQuantity('plus')}>+</button>
            </div>
        </div>
    )
}

export default CartItem