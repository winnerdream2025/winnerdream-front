import React from 'react';

function LLC() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>Create Your LLC in the USA</h1>
        <p>Launch your American business with Winners Dream Business Growth</p>
      </header>

      <main>
        <h2>Why choose Winners Dream to create your LLC?</h2>
        <p>
          We make it easy and affordable for international entrepreneurs to legally establish their businesses
          in the United States. Whether you're from Africa or any other part of the world, we guide you
          through the full process remotely.
        </p>

        <h2>Benefits of our LLC service:</h2>
        <ul>
          <li>✅ 100% remote setup – no travel required</li>
          <li>✅ LLC created in 2–7 business days</li>
          <li>✅ Support in English and French</li>
          <li>✅ Access to business tools (Stripe, PayPal, Wise, Mercury, QuickBooks)</li>
          <li>✅ Lifetime customer support via WhatsApp and Zoom</li>
        </ul>

        <h2>What you will receive:</h2>
        <ul>
          <li>📄 Articles of Organization (official state registration)</li>
          <li>📊 Federal EIN (Employer Identification Number)</li>
          <li>📘 Operating Agreement (customized)</li>
          <li>🛡️ Registered Agent Service (1 year included)</li>
          <li>🏦 Help opening your U.S. business bank account</li>
        </ul>

        <h2>States Available:</h2>
        <p>
          You can choose to register your LLC in <strong>Wyoming, Delaware, Texas, or Florida</strong> –
          depending on your business strategy and tax preferences. We can help you choose the best one.
        </p>

        <div style={{ marginTop: '30px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <a href="https://wa.me/+13192027332" target="_blank" rel="noreferrer"
            style={buttonStyle}>
            📲 Get Started on WhatsApp
          </a>
          <a href="https://calendly.com/winnerdreambusiness-growth/" target="_blank" rel="noreferrer"
            style={buttonStyle}>
            📅 Book Your Appointment
          </a>
        </div>
      </main>

      <footer style={{ marginTop: '50px', textAlign: 'center', color: '#888' }}>
        &copy; 2025 Winners Dream Business Growth LLC — All rights reserved.
      </footer>
    </div>
  );
}

const buttonStyle = {
  padding: '12px 20px',
  backgroundColor: '#28a745',
  color: 'white',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: 'bold'
};

export default LLC;

