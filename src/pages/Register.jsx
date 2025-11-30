import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Stethoscope, ShieldCheck } from 'lucide-react';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import '../styles/Auth.css';

const Register = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('patient');
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleRoleChange = (newRole) => {
        setRole(newRole);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Confirm role selection
        if (!window.confirm(`Register as ${role.charAt(0).toUpperCase() + role.slice(1)}?`)) {
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            const user = {
                email: formData.email,
                role: role,
                name: formData.name || formData.email.split('@')[0]
            };
            localStorage.setItem('medvault_user', JSON.stringify(user));
            setIsLoading(false);
            navigate('/dashboard');
        }, 1500);
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-header">
                    <h1 className="auth-title">Create Account</h1>
                    <p className="auth-subtitle">Join MedVault to start your health journey.</p>
                </div>
                <Card className="auth-card">
                    <div className="role-selector">
                        <button
                            className={`role-btn ${role === 'patient' ? 'active' : ''}`}
                            onClick={() => handleRoleChange('patient')}
                        >
                            <User size={20} />
                            <span>Patient</span>
                        </button>
                        <button
                            className={`role-btn ${role === 'doctor' ? 'active' : ''}`}
                            onClick={() => handleRoleChange('doctor')}
                        >
                            <Stethoscope size={20} />
                            <span>Doctor</span>
                        </button>
                        <button
                            className={`role-btn ${role === 'admin' ? 'active' : ''}`}
                            onClick={() => handleRoleChange('admin')}
                        >
                            <ShieldCheck size={20} />
                            <span>Admin</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="auth-form">
                        <Input
                            id="name"
                            type="text"
                            label="Full Name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            id="email"
                            type="email"
                            label="Email Address"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            id="password"
                            type="password"
                            label="Password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            id="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <Button type="submit" className="w-full btn-full" size="lg" isLoading={isLoading}>
                            Register as {role.charAt(0).toUpperCase() + role.slice(1)}
                        </Button>
                    </form>
                    <div className="auth-footer">
                        <p>Already have an account? <Link to="/login" className="text-primary hover-underline font-medium">Sign in</Link></p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Register;
