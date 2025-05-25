import React from 'react';

const CartPage: React.FC = () => {
    // Example cart items, replace with your state management or context
    const cartItems = [
        { id: 1, name: 'Rose Bouquet', quantity: 2, price: 25 },
        { id: 2, name: 'Tulip Arrangement', quantity: 1, price: 30 },
    ];

    const getTotal = () =>
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'left' }}>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td style={{ textAlign: 'center' }}>{item.quantity}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div style={{ marginTop: '2rem', fontWeight: 'bold' }}>
                Total: ${getTotal().toFixed(2)}
            </div>
            <button
                style={{
                    marginTop: '1rem',
                    padding: '0.5rem 1.5rem',
                    fontSize: '1rem',
                    cursor: 'pointer',
                }}
                disabled={cartItems.length === 0}
            >
                Proceed to Checkout
            </button>
        </div>
    );
};

export default CartPage;