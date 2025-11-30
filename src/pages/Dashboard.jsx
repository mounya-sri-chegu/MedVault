import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('medvault_user');
        if (!storedUser) {
            navigate('/login');
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('medvault_user');
        navigate('/login');
    };

    if (!user) return null;

    return (
        <div className="container" style={{ padding: '2rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>MedVault</h1>
                <Button variant="secondary" onClick={handleLogout} size="sm">Sign Out</Button>
            </header>

            <Card>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Welcome, {user.name || 'User'}!</h2>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.125rem' }}>
                    You are logged in as a <strong style={{ color: 'var(--color-primary)', textTransform: 'capitalize' }}>{user.role}</strong>.
                </p>
                <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-md)' }}>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                        This is a demo dashboard. In a real application, you would see your medical records, appointments, and more here.
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default Dashboard;
