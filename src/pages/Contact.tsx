import React from 'react';

const Contact: React.FC = () => {
    return (
        <div style={{ maxWidth: 600, margin: '2rem auto', padding: '1rem' }}>
            <h1>Contact Us</h1>
            <p>
                Have questions or want to get in touch? Fill out the form below or email us at{' '}
                <a href="mailto:info@softwarealacarta.com">info@softwarealacarta.com</a>.
            </p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <label>
                    Name:
                    <input type="text" name="name" required style={{ width: '100%' }} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required style={{ width: '100%' }} />
                </label>
                <label>
                    Message:
                    <textarea name="message" rows={5} required style={{ width: '100%' }} />
                </label>
                <button type="submit" style={{ width: 'fit-content' }}>Send</button>
            </form>
        </div>
    );
};

export default Contact;