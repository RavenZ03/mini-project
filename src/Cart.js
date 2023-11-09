import React from 'react';

function Cart({ cart }) {
    return (
        <div>
            <h2>Cart</h2>
            {cart.map((product, index) => (
                <div key={index}>
                    <h3>{product.title}</h3>
                    {/* Tampilkan informasi lainnya tentang produk */}
                </div>
            ))}
        </div>
    );
}

export default Cart;