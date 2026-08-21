import { useState } from 'react';
import PageHeader from '../components/PageHeader';

export default function AttendanceChecker() {
  const [employee, setEmployee] = useState('');
  const [timeIn, setTimeIn] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  function check(event) {
    event.preventDefault(); const time = Number(timeIn);
    if (employee.trim() === '' || timeIn === '') { setError('Please enter the employee name and time in.'); setResult(null); }
    else if (time < 0 || time > 24) { setError('Enter a valid decimal time from 0 to 24.'); setResult(null); }
    else { let status, message; if (time <= 8) { status = 'On Time'; message = 'Status: On Time – Good job!'; } else if (time <= 9) { status = 'Late'; message = 'Status: Late – Please be on time tomorrow.'; } else { status = 'Very Late'; message = 'Status: Very Late – Report to your supervisor.'; } setResult({ employee: employee.trim(), time, status, message }); setError(''); }
  }
  function reset() { setEmployee(''); setTimeIn(''); setResult(null); setError(''); }
  function formatTime(decimal) { const hours = Math.floor(decimal); const minutes = Math.round((decimal - hours) * 60); const hour12 = hours % 12 || 12; return `${hour12}:${String(minutes).padStart(2, '0')} ${hours < 12 ? 'AM' : 'PM'}`; }
  return <section><PageHeader number="5" title="Employee Attendance Checker" description="Classify an employee's arrival using a decimal time-in value." /><div className="workspace-card two-column"><form onSubmit={check} className="form-panel"><label>Employee Name<input value={employee} onChange={(e) => setEmployee(e.target.value)} placeholder="Enter employee name" /></label><label>Time In<input type="number" step="0.01" value={timeIn} onChange={(e) => setTimeIn(e.target.value)} placeholder="e.g. 8.5 for 8:30 AM" /></label><p className="hint">Use decimal time: 8.5 means 8:30 AM.</p><div className="button-row"><button className="primary" type="submit">Check Attendance</button><button className="secondary" type="button" onClick={reset}>Reset</button></div>{error && <div className="feedback error">{error}</div>}</form><div className="result-panel">{result ? <><span className={'status ' + (result.status === 'On Time' ? 'success' : result.status === 'Late' ? 'medium' : 'danger')}>{result.status}</span><h2>{result.employee}</h2><div className="time-display">{formatTime(result.time)}<small>Decimal input: {result.time}</small></div><p>{result.message}</p></> : <div className="empty-state"><b>◷</b><h3>Attendance result</h3><p>The employee's status will appear here.</p></div>}</div></div></section>;
}
