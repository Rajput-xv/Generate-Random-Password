import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from './config';
import './App.css';

function App() {
  const [length, setLength] = useState(12);
  const [letters, setLetters] = useState(true);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLengthChange = (value) => {
    const numValue = parseInt(value);
    if (numValue >= 4 && numValue <= 50) {
      setLength(numValue);
    } else if (numValue < 4) {
      setLength(4);
    } else if (numValue > 50) {
      setLength(50);
    }
  };

  const generatePassword = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/generate`, {
        length,
        letters,
        numbers,
        symbols
      });
      setPassword(response.data.password);
    } catch (error) {
      alert(error.response?.data?.error || 'Error generating password');
    }
    setLoading(false);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied!');
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Password Generator</h1>
        
        <div className="form">
          <div className="input-group">
            <label>Password Length</label>
            
            <div className="length-input-container">
              <input
                type="number"
                min="4"
                max="50"
                value={length}
                onChange={(e) => handleLengthChange(e.target.value)}
                className="length-input"
                placeholder="Enter length (4-50)"
              />
              <span className="length-display">characters</span>
            </div>

            <div className="slider-container">
              <input
                type="range"
                min="4"
                max="50"
                value={length}
                onChange={(e) => handleLengthChange(e.target.value)}
                className="length-slider"
              />
              <div className="slider-labels">
                <span>4</span>
                <span>25</span>
                <span>50</span>
              </div>
            </div>
          </div>

          <div className="checkboxes">
            <label>
              <input
                type="checkbox"
                checked={letters}
                onChange={(e) => setLetters(e.target.checked)}
              />
              Letters (A-Z, a-z)
            </label>

            <label>
              <input
                type="checkbox"
                checked={numbers}
                onChange={(e) => setNumbers(e.target.checked)}
              />
              Numbers (0-9)
            </label>

            <label>
              <input
                type="checkbox"
                checked={symbols}
                onChange={(e) => setSymbols(e.target.checked)}
              />
              Symbols (!@#$...)
            </label>
          </div>

          <button onClick={generatePassword} disabled={loading}>
            {loading ? 'Generating...' : 'Generate Password'}
          </button>
        </div>

        {password && (
          <div className="result">
            <input type="text" value={password} readOnly />
            <button onClick={copyPassword}>Copy</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;