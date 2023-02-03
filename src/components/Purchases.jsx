import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

    const purchases = useSelector((state) => state.purchases);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPurchasesThunk());
    }, []);

    return (
        <div>
            <h2>purchases</h2>
            <ul>
                {
                    purchases.map(purchases => (
                        <li key={purchases.id} className="mb-2">
                            <Link to={`/product/${purchases.product?.id}`} >
                                <Row>
                                    <Col>
                                        <img src={purchases.product?.images[0].url} style={{ width: 200 }} alt="" />
                                    </Col>
                                    <Col>
                                        {purchases.product?.title}
                                    </Col>
                                </Row>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Purchases;