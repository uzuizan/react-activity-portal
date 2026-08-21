import { useState } from 'react';
import PageHeader from '../components/PageHeader';

export default function GradeEvaluation() {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  function evaluate(event) {
    event.preventDefault();
    const value = Number(score);
    if (name.trim() === '' || score === '') { setError('Please enter the student name and score.'); setResult(null); }
    else if (value < 0 || value > 100) { setError('Invalid score. Enter a value from 0 to 100.'); setResult(null); }
    else {
      let remarks;
      if (value >= 90) remarks = 'Excellent';
      else if (value >= 85) remarks = 'Very Good';
      else if (value >= 80) remarks = 'Good';
      else if (value >= 75) remarks = 'Passed';
      else remarks = 'Failed';
      setResult({ name: name.trim(), score: value, remarks }); setError('');
    }
  }
  function clear() { setName(''); setScore(''); setResult(null); setError(''); }

  return <section><PageHeader number="2" title="Student Grade Evaluation" description="Evaluate a student's score and generate the correct academic remark." /><div className="workspace-card two-column"><form onSubmit={evaluate} className="form-panel"><label>Student Name<input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Juan Dela Cruz" /></label><label>Score<input type="number" value={score} onChange={(e) => setScore(e.target.value)} placeholder="0–100" /></label><div className="button-row"><button className="primary" type="submit">Evaluate Grade</button><button className="secondary" type="button" onClick={clear}>Clear</button></div>{error && <div className="feedback error">{error}</div>}</form><div className="result-panel">{result ? <><span className={'status ' + (result.remarks === 'Failed' ? 'danger' : 'success')}>{result.remarks}</span><h2>{result.name}</h2><div className="score-ring">{result.score}<small>/100</small></div><p>Final Remarks: <strong>{result.remarks}</strong></p></> : <div className="empty-state"><b>◎</b><h3>Result will appear here</h3><p>Complete the form and evaluate the score.</p></div>}</div></div></section>;
}
