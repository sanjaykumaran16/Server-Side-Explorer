import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeSnippets = {
  server: `const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.post('/api/data', (req, res) => {
  const { data } = req.body;
  console.log('Data received:', data);
  res.status(201).json({ message: 'Data received successfully', yourData: data });
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`,
  database: `const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Create a schema
const itemSchema = new mongoose.Schema({
  name: String,
  date: { type: Date, default: Date.now }
});

// Create a model
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;`,
  routeWithParams: `// Example of a route with a parameter
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  
  // Here you would typically find the user in a database
  const user = findUserById(userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});`
};

const TabButton = ({ title, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(title)}
    style={{
      padding: '10px 15px',
      border: 'none',
      background: activeTab === title ? '#2d2d2d' : '#454545',
      color: 'white',
      cursor: 'pointer',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      borderBottom: activeTab === title ? '2px solid #3498db' : '2px solid transparent',
      transition: 'border-bottom 0.2s ease-in-out',
      marginRight: '5px'
    }}
  >
    {title.charAt(0).toUpperCase() + title.slice(1)}
  </button>
);

function CodeViewer() {
  const [activeTab, setActiveTab] = useState('server');

  return (
    <div className="card-container">
      <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Code Examples</h2>
      <div style={{ background: '#454545', padding: '5px 5px 0 5px', borderRadius: '5px 5px 0 0' }}>
        {Object.keys(codeSnippets).map(key => (
          <TabButton key={key} title={key} activeTab={activeTab} setActiveTab={setActiveTab} />
        ))}
      </div>
      <SyntaxHighlighter language="javascript" style={atomDark} customStyle={{ borderRadius: '0 0 5px 5px', margin: 0 }}>
        {codeSnippets[activeTab]}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeViewer;
