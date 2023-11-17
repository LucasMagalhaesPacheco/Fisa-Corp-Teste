import React from 'react';
import { useNavigate } from 'react-router-dom';
import AcaiForm from '../../components/formAcai';


const Cart = () => {
    const navigate = useNavigate()

    return (
        <div>
            <AcaiForm />
        </div>
    )
}

export default Cart;