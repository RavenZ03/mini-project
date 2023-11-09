import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Cart from './Cart';
import axios from 'axios';

function Home() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products?select=title,price,description,images')
            .then(res => {
                setProducts(res.data.products);
            });
    }, []);

    const openProductDetail = (product) => {
        setSelectedProduct(product);
    };

    const closeProductDetail = () => {
        setSelectedProduct(null);
    };

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div>
            {/* Header */}
            <header className="bg-dark text-white py-3">
                <div className="">
                    <h1 className="display-4">E-Commerce Store</h1>
                </div>
            </header>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/"></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/shop">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                        <div className='buttons'>
                            <a href='' className='btn btn-outline-light ms-2'>
                                <i className='fa fa-shopping-cart me-1'></i> Cart (0)</a>
                            <a href='' className='btn btn-outline-light ms-2'>
                                <i className='fa fa-sign-out me-1'></i> Logout</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Daftar Produk */}
            <div className="container my-5 product-grid">
                <div className="row">
                    {products.map((product, index) => (
                        <div className="col-md-2 col-lg-3" key={index}>
                            <div className="card mb-4 product-card h-100">
                                <img src={product.images[0]} className="card-img-top product-image" alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">Price: ${product.price}</p>
                                    <button onClick={() => openProductDetail(product)} className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dialog Detail Produk */}
            {selectedProduct && (
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedProduct.title}</h5>
                                <button onClick={closeProductDetail} className="close">
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img src={selectedProduct.images[0]} alt={selectedProduct.title} style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'contain' }} />
                                <p>{selectedProduct.description}</p>
                                <p>Price: ${selectedProduct.price}</p>
                                <button onClick={() => addToCart(selectedProduct)} className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                </div>

            )}

        </div>
    );
}

export default Home;



