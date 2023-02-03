import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterProductsCategoryThunk, getProductsThunk } from '../store/slices/products.slice';

const Home = () => {

    const dispatch = useDispatch();
    const productsList = useSelector(state => state.product);
    const [categories, setCategories] = useState([]);
    const [productSearch, setProductSearch] = useState("");

    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getProductsThunk());

        axios.get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
            .then(res => setCategories(res.data));
    }, []);

    console.log(categories)
    //
    return (
        <div>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={productSearch}
                    onChange={e => setProductSearch(e.target.value)}
                />
                <Button
                    onClick={() => dispatch(filterProductsCategoryThunk(productSearch))}
                    variant="outline-secondary"
                    id="button-addon2">
                    Button
                </Button>
            </InputGroup>
            {
                categories.map(category => (
                    <Button key={category.id} onClick={() => dispatch(filterProductsCategoryThunk(category.id))}>
                        {category.name}
                    </Button>
                ))
            }
            <ul className='products-list'>
                {
                    productsList.map(product => (
                        <li className='products-list-all' key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
                            <div className='container'>
                                <div>
                                    <img className='image' src={product.images[0].url} alt="" />
                                </div>
                                <div>
                                    <span>{product.brand}</span>
                                    <h2>{product.title}</h2>
                                    <span>price:</span>
                                    <h2>{product.price}</h2>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>

        </div>
    );
};

export default Home;