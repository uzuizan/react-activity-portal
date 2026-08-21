import { useState } from 'react';
import PageHeader from '../components/PageHeader';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (username.trim() === '' && password === '') setMessage('Please enter username and password.');
    else if (username === 'admin' && password === 'react123') {
      setMessage('Login successful!');
      setLoggedIn(true);
    } else setMessage('Invalid username or password.');
  }

  function logout() {
    setLoggedIn(false); setUsername(''); setPassword(''); setMessage('');
  }

  return (
    <section>
      <PageHeader number="1" title="Login Authentication" description="Enter the demo credentials to access the portal." />
      <div className="workspace-card">
        {!loggedIn ? (
          <form onSubmit={handleSubmit} className="form-panel">
            <div className="credentials"><strong>Demo credentials</strong><span>Username: admin</span><span>Password: react123</span></div>
            <label>Username<input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" /></label>
            <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" /></label>
            <button className="primary" type="submit">Login</button>
            {message && <div className="feedback error">{message}</div>}
          </form>
        ) : (
          <div className="success-panel"><div className="success-icon">✓</div><span className="status success">AUTHENTICATED</span><h2>Welcome, {username}!</h2><p>{message} You now have access to the React Activity Portal.</p><button className="secondary" onClick={logout}>Logout</button></div>
        )}
      </div>
    </section>
  );
}
