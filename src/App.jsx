import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import GradeEvaluation from './pages/GradeEvaluation';
import PasswordChecker from './pages/PasswordChecker';
import ElectricityBill from './pages/ElectricityBill';
import AttendanceChecker from './pages/AttendanceChecker';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  let content;
  if (activePage === 'activity1') content = <Login />;
  else if (activePage === 'activity2') content = <GradeEvaluation />;
  else if (activePage === 'activity3') content = <PasswordChecker />;
  else if (activePage === 'activity4') content = <ElectricityBill />;
  else if (activePage === 'activity5') content = <AttendanceChecker />;
  else content = <Home onNavigate={setActivePage} />;

  return (
    <div className="app-shell">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <main className="main-content">{content}</main>
      <footer>React JS Practical Assessment • Five activities, one portal</footer>
    </div>
  );
}
