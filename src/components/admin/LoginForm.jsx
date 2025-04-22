import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authAdmin } from '../../features/auth/auth.action';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { resetAdminState } from '../../features/auth/auth.slicer';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in both fields');
      return;
    }

    const payload = { email, password };
    dispatch(authAdmin(payload));

    setEmail('');
    setPassword('');
  };

  const { isAdminSuccess, isAdminFailed, isAdminLoading } = useSelector(
    (state) => state?.auth
  );

  useEffect(() => {
    if (isAdminSuccess) {
      toast.success(`LoggedIn SuccessFully`);
      navigate('/admin');
    }
    if (isAdminFailed) {
      toast.error('Invalid Credentials');
    }
    dispatch(resetAdminState());
  }, [dispatch, isAdminFailed, isAdminSuccess, navigate]);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f3f4f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#ffffff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '1.5rem',
            color: '#111827',
            fontSize: '1.5rem',
            fontWeight: '600',
          }}
        >
          Admin Login
        </h2>

        <div style={{ marginBottom: '1rem' }}>
          <label
            htmlFor="email"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#1f2937',
              fontWeight: '500',
            }}
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #d1d5db',
              background: '#f9fafb',
              color: '#111827',
            }}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label
            htmlFor="password"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#1f2937',
              fontWeight: '500',
            }}
          >
            Password:
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #d1d5db',
              background: '#f9fafb',
              color: '#111827',
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#111827',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#1f2937')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#111827')}
        >
          {isAdminLoading ? 'Loggin In' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
