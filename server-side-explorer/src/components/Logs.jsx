import { useEffect, useRef } from 'react';

function Logs({ logs }) {
  const logsEndRef = useRef(null);

  const scrollToBottom = () => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [logs]);

  return (
    <div className="card-container">
      <h2 className="section-title">Server Logs</h2>
      <div className="log-viewer">
        {logs.length > 0 ? (
          logs.map((log, idx) => <div key={idx}>{log}</div>)
        ) : (
          <div>No activity yet. Try simulating a request!</div>
        )}
        <div ref={logsEndRef} />
      </div>
    </div>
  );
}

export default Logs;
