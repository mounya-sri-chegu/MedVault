import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Stethoscope, ShieldCheck } from 'lucide-react';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import '../styles/Auth.css';

const Login = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('patient');
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleRoleChange = (newRole) => {
        setRole(newRole);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            const user = {
                email: formData.email,
                role: role,
                name: formData.email.split('@')[0]
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
                    <h1 className="auth-title">Welcome Back</h1>
                    <p className="auth-subtitle">Sign in to MedVault to manage your health records.</p>
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
                        <div className="form-footer">
                            <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
                        </div>
                        <Button type="submit" className="w-full btn-full" size="lg" isLoading={isLoading}>
                            Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}
                        </Button>
                    </form>
                    <div className="auth-footer">
                        <p>Don't have an account? <Link to="/register" className="text-primary hover-underline font-medium">Create one</Link></p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Login;
