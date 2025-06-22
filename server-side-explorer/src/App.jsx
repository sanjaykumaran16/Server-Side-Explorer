import { useState } from 'react';
import Navbar from './components/Navbar';
import RequestSimulator from './components/RequestSimulator';
import Logs from './components/Logs';
import CodeViewer from './components/CodeViewer';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [tab, setTab] = useState('home');
  const [logs, setLogs] = useState([]);

  const addLog = (message) => {
    const time = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, `[${time}] ${message}`]);
  };

  return (
    <div className="app">
      <Navbar setTab={setTab} />
      <main className="main-content fade-in">
        {tab === 'home' && (
          <div className="text-center">
            <h1 className="section-title">Welcome to Server-Side Explorer</h1>
            <p style={{maxWidth: '600px', margin: '1rem auto', fontSize: '1.1rem'}}>
              Server-Side Explorer is an interactive learning tool designed to help you understand the fundamentals of server-side technologies. Simulate API requests, view server logs, explore code examples, and test your knowledge with quizzes—all in one place. Perfect for students, educators, and anyone curious about how the server side of the web works!
            </p>
          </div>
        )}
        {tab === 'simulate' && <RequestSimulator addLog={addLog} />}
        {tab === 'logs' && <Logs logs={logs} />}
        {tab === 'code' && <CodeViewer />}
        {tab === 'quiz' && <Quiz />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
