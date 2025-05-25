import React from 'react';

const CheckoutPage: React.FC = () => {
    return (
        <div className="checkout-page" style={{ padding: '2rem', maxWidth: 600, margin: '0 auto' }}>
            <h1>Checkout</h1>
            <form>
                <div style={{ marginBottom: '1rem' }}>
                    <label>
                        Name:
                        <input type="text" name="name" required style={{ marginLeft: '1rem', width: '100%' }} />
                    </label>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label>
                        Address:
                        <input type="text" name="address" required style={{ marginLeft: '1rem', width: '100%' }} />
                    </label>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label>
                        Email:
                        <input type="email" name="email" required style={{ marginLeft: '1rem', width: '100%' }} />
                    </label>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label>
                        Payment Method:
                        <select name="payment" required style={{ marginLeft: '1rem', width: '100%' }}>
                            <option value="">Select</option>
                            <option value="credit">Credit Card</option>
                            <option value="paypal">PayPal</option>
                        </select>
                    </label>
                </div>
                <button type="submit" style={{ padding: '0.5rem 2rem' }}>Place Order</button>
            </form>
        </div>
    );
};

export default CheckoutPage;