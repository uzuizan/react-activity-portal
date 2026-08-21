import { useState } from 'react';
import PageHeader from '../components/PageHeader';

export default function ElectricityBill() {
  const [customer, setCustomer] = useState('');
  const [consumption, setConsumption] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  function calculate(event) {
    event.preventDefault(); const kwh = Number(consumption);
    if (customer.trim() === '' || consumption === '') { setError('Please enter the customer name and consumption.'); setResult(null); }
    else if (kwh < 0) { setError('Consumption cannot be negative.'); setResult(null); }
    else { let rate; if (kwh <= 100) rate = 10; else if (kwh <= 200) rate = 12; else if (kwh <= 300) rate = 15; else rate = 18; const total = kwh * rate; setResult({ customer: customer.trim(), kwh, rate, total, usage: total >= 5000 ? 'High Electricity Usage' : 'Normal Electricity Usage' }); setError(''); }
  }
  function clear() { setCustomer(''); setConsumption(''); setResult(null); setError(''); }
  return <section><PageHeader number="4" title="Electricity Bill Calculator" description="Calculate the total bill using the rate assigned to the consumption tier." /><div className="workspace-card two-column"><form onSubmit={calculate} className="form-panel"><label>Customer Name<input value={customer} onChange={(e) => setCustomer(e.target.value)} placeholder="Enter customer name" /></label><label>Consumption (kWh)<input type="number" step="any" value={consumption} onChange={(e) => setConsumption(e.target.value)} placeholder="e.g. 250" /></label><div className="button-row"><button className="primary" type="submit">Calculate Bill</button><button className="secondary" type="button" onClick={clear}>Clear</button></div>{error && <div className="feedback error">{error}</div>}</form><div className="result-panel bill-result">{result ? <><span className={'status ' + (result.total >= 5000 ? 'danger' : 'success')}>{result.usage}</span><h2>{result.customer}</h2><div className="detail-row"><span>Consumption</span><strong>{result.kwh.toLocaleString()} kWh</strong></div><div className="detail-row"><span>Rate Applied</span><strong>₱{result.rate.toFixed(2)} / kWh</strong></div><div className="total-row"><span>Total Bill</span><strong>₱{result.total.toLocaleString('en-PH', { minimumFractionDigits: 2 })}</strong></div></> : <div className="empty-state"><b>₱</b><h3>Bill summary</h3><p>Calculation details will appear here.</p></div>}</div></div></section>;
}
