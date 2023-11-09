import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Home from './Home';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const authorizedUsers = [
    { username: 'raf', password: '123' },
    { username: 'user2', password: 'password2' },
  ];

  const handleLogin = () => {
    const user = authorizedUsers.find(user => user.username === username && user.password === password);
    if (user) {
      setLoggedIn(true);
    } else {
      setLoginError(true);
    }
  }

  return (
    <>
      {loggedIn ? (
        < div className="container-fluid">
          <Home />

        </div>
      ) : (
        <div className="Container displayFlex">
          <div className="login-container">
            <h2 className="login-heading">Login</h2>
            {loginError && (
              <div className="error-message">Login failed. Please check your credentials.</div>
            )}
            <form className="login-form">
              <div className={`form-group ${loginError ? 'error' : ''}`}>
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className={`form-group ${loginError ? 'error' : ''}`}>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button type="button" className="login-button" onClick={handleLogin}>Login</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
