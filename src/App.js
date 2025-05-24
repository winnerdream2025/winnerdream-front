import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const { t, i18n } = useTranslation();

  return (
    <Router>
      <div className="App">
        <img src="/img1.png" alt="WinnerDream Logo" style={{ maxWidth: '140px', marginBottom: '20px', borderRadius: '12px' }} />

        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => i18n.changeLanguage('fr')} style={{ marginRight: '10px' }}>FR</button>
          <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        </div>

        <Routes>
          <Route path="/" element={
            <>
              {showLogin ? <Login /> : <Register />}
              <p style={{ marginTop: '30px' }}>
                {showLogin ? t("no_account") : t("already_account")}{" "}
                <button onClick={() => setShowLogin(!showLogin)} style={{ padding: '5px 10px' }}>
                  {showLogin ? t("register") : t("login")}
                </button>
              </p>
            </>
          } />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




