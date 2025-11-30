import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import '../styles/Auth.css'; // reuse shared auth styles for spacing

const Home = () => {
    return (
        <div className="auth-page">
            <div className="auth-container">
                <Card className="auth-card" style={{ textAlign: 'center', padding: '3rem' }}>
                    <h1 className="auth-title" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                        MedVault
                    </h1>
                    <p className="auth-subtitle" style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
                        Your secure Personal Electronic Health Record System.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/login">
                            <Button size="lg">Login</Button>
                        </Link>
                        <Link to="/register">
                            <Button variant="secondary" size="lg">Register</Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Home;
