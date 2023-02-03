import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { filterProductNameThunk } from '../store/slices/products.slice';

const ProductsDetails = () => {

    const { id } = useParams();
    const [products, setProducts] = useState({});

    const productList = useSelector(state => state.product)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then(res => {
                setProducts(res.data)

                dispatch(filterProductNameThunk(res.data.category.id))
            });
    }, [id])

    console.log(products);
    return (
        <div className='containers'>
            <div>
                <div>
                    <img src={products.images?.[1].url} alt="" className='image' />
                </div>
                <div className='container-info'>
                    <h1>{products.title}</h1>
                    <p>{products.description}</p>
                </div>
            </div>

            <div className='container-3'>
                {
                    productList.map(productItem => (
                        <li
                            className='conteiner-secundary'
                            key={productItem.id}
                            onClick={() => navigate(`/product/${productItemId}`)}>
                            <div className='product-2'>
                                <div className='container-img'>
                                    <img src={productItem.images[0].url} alt="" className='img-secundary' />
                                </div>
                                <div className='info-product'>
                                    <span>{productItem.title}</span>
                                    <span>price: {productItem.price}</span>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductsDetails;