import React from 'react';

function Digital() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Inter, sans-serif' }}>
      <header
        style={{
          background: "url('/img6.jpg') no-repeat center center / cover",
          padding: '60px 20px',
          color: 'white',
          textAlign: 'center',
          borderRadius: '10px'
        }}
      >
        <h1>Social Media Management & Paid Advertising</h1>
        <p>Grow your brand visibility and attract real customers online</p>
      </header>

      <main style={{ marginTop: '30px' }}>
        <h2>Why choose Winners Dream?</h2>
        <p>
          We help you create a strong and consistent online presence that speaks directly to your target audience.
          From engaging content to smart ad strategies, we do it all for you.
        </p>

        <h2>Our Social Media Services:</h2>
        <ul>
          <li>📱 Profile setup and branding (Facebook, Instagram, TikTok, etc.)</li>
          <li>🎨 Content creation (graphics, videos, captions)</li>
          <li>🗓️ Publishing calendar and community management</li>
          <li>📢 Reputation monitoring and engagement growth</li>
        </ul>

        <h2>Our Advertising Services:</h2>
        <ul>
          <li>📊 Facebook and Instagram ads</li>
          <li>🔍 Google Ads (Search & Display)</li>
          <li>🎯 Audience targeting & retargeting</li>
          <li>✍️ Ad copywriting and creative design</li>
          <li>📈 Performance tracking and weekly reports</li>
        </ul>

        <h2>Who is this for?</h2>
        <p>
          Entrepreneurs, small businesses, service providers, influencers — anyone who wants to grow online without
          spending hours figuring it out themselves.
        </p>

        <div style={{ marginTop: '30px' }}>
          <a href="https://wa.me/+13192027332" target="_blank" rel="noreferrer" style={buttonStyle}>
            Message Us on WhatsApp
          </a>
          <a href="https://calendly.com/winnerdreambusiness-growth/" target="_blank" rel="noreferrer" style={buttonStyle}>
            Book a Strategy Call
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
  display: 'inline-block',
  marginRight: '15px',
  padding: '12px 20px',
  backgroundColor: '#28a745',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  fontWeight: 'bold'
};

export default Digital;

