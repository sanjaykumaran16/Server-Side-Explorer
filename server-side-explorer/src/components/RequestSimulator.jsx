import { useState } from 'react';

const getExplanation = `
  Client sends a GET request to the server at '/api/data'.
  
  The server receives the request, processes it, and retrieves the requested data.
  
  The server then sends back a response with a 200 OK status code and a JSON payload.
  
  Client receives the data: { message: 'Hello from server!' }
  `;

const postExplanation = `
  Client sends a POST request to the server at '/api/data' with a request body.
  
  The server receives the request and the data in the body, then processes it (e.g., saves it to a database).
  
  The server confirms the creation of a new resource with a 201 Created status code.
  
  Client receives confirmation: { message: 'Data saved successfully!' }
  `;

function RequestSimulator({ addLog }) {
  const [output, setOutput] = useState('Click a button to simulate a request.');

  const simulateRequest = (method) => {
    if (method === 'GET') {
      setOutput(getExplanation);
      addLog("Received GET request for /api/data. Responding with 200 OK.");
    } else if (method === 'POST') {
      setOutput(postExplanation);
      addLog("Received POST request for /api/data. Responding with 201 Created.");
    }
  };

  return (
    <div className="card-container text-center">
      <h2 className="section-title">Simulate API Request</h2>
      <div>
        <button onClick={() => simulateRequest('GET')} className="btn btn-green">GET</button>
        <button onClick={() => simulateRequest('POST')} className="btn btn-blue" style={{marginLeft: '1rem'}}>POST</button>
      </div>
      <pre className="code-block" style={{marginTop: '1.5rem', textAlign: 'left', whiteSpace: 'pre-wrap'}}>{output}</pre>
    </div>
  );
}

export default RequestSimulator;
