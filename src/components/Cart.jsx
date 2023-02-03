import React, { useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Cart = ({show, handleClose}) => {

    const dispatch = useDispatch();

    const purchasesCar = useSelector(state => state.purchases);

    useEffect(() => {
        dispatch(getPurchasesThunk());
    }, [])
    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {purchasesCar.map(purchases => (
                    <li key={purchases.id}>
                        {purchases.product?.title}
                        </li>
                ))}
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Cart;