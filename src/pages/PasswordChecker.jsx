import { useState } from 'react';
import PageHeader from '../components/PageHeader';

export default function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  function check(event) {
    event.preventDefault();
    if (password === '') { setError('Please enter a password.'); setResult(null); return; }
    let strength;
    if (password.length < 6) strength = 'Weak';
    else if (password.length < 10) strength = 'Medium';
    else strength = 'Strong';
    const message = strength === 'Strong' ? 'Status: Strong – You can use this password.' : 'Status: Weak – Create a stronger password.';
    setResult({ strength, message, length: password.length }); setError('');
  }
  function clear() { setPassword(''); setResult(null); setError(''); }
  return <section><PageHeader number="3" title="Password Strength Checker" description="Classify a password as weak, medium, or strong based on its length." /><div className="workspace-card two-column"><form onSubmit={check} className="form-panel"><label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter a password" /></label><p className="hint">Weak: under 6 • Medium: 6–9 • Strong: 10+</p><div className="button-row"><button className="primary" type="submit">Check Password</button><button className="secondary" type="button" onClick={clear}>Clear</button></div>{error && <div className="feedback error">{error}</div>}</form><div className="result-panel">{result ? <><span className={'status ' + result.strength.toLowerCase()}>{result.strength} Password</span><h2>Password Status</h2><div className="strength-meter"><i className={result.strength.toLowerCase()}></i></div><p>{result.message}</p><small>{result.length} characters entered</small></> : <div className="empty-state"><b>⌁</b><h3>Check your password</h3><p>Your strength result will appear here.</p></div>}</div></div></section>;
}
