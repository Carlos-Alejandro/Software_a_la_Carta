import React from 'react';
import { useParams } from 'react-router-dom';

interface Flower {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

const mockFlowers: Flower[] = [
    {
        id: '1',
        name: 'Rose Bouquet',
        description: 'A beautiful bouquet of red roses.',
        price: 29.99,
        imageUrl: '/images/rose-bouquet.jpg',
    },
    {
        id: '2',
        name: 'Tulip Arrangement',
        description: 'Colorful tulips arranged with care.',
        price: 24.99,
        imageUrl: '/images/tulip-arrangement.jpg',
    },
];

const FlowerDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const flower = mockFlowers.find(f => f.id === id);

    if (!flower) {
        return <div>Flower not found.</div>;
    }

    return (
        <div style={{ maxWidth: 600, margin: '2rem auto', padding: '1rem', border: '1px solid #eee', borderRadius: 8 }}>
            <img src={flower.imageUrl} alt={flower.name} style={{ width: '100%', borderRadius: 8 }} />
            <h1>{flower.name}</h1>
            <p>{flower.description}</p>
            <h2>${flower.price.toFixed(2)}</h2>
            <button style={{ padding: '0.5rem 1rem', background: '#e91e63', color: '#fff', border: 'none', borderRadius: 4 }}>
                Add to Cart
            </button>
        </div>
    );
};

export default FlowerDetailPage;