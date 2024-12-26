<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Web Development - Code Baustein</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
<!-- #header -->
  <header class="navbar">
    <div class="logo">Code Baustein</div>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <button class="quote-btn">Get a Quote →</button>
  </header>
<!-- #header -->

  <section class="hero">
    <h1>Web Development</h1>
  </section>

  <section class="content">
    <div class="text-block">
      <h2>Building Dynamic, Scalable, and Secure Web Solutions</h2>
      <p>
        At <strong>Code Baustein</strong>, we specialize in developing responsive,
        high-performing websites tailored to your business needs. Whether you need
        a robust eCommerce platform, a content-rich blog, or a corporate website,
        our experienced team will bring your vision to life using the latest
        technologies and best practices in web development.
      </p>
    </div>
    <div class="illustration">
      <img src="illustration.png" alt="Web Development Illustration" />
    </div>
  </section>

  <script type="module" src="/main.js"></script>
</body>
</html>


<!-- css -->
/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

/* Navbar Styling */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #121212;
  padding: 20px;
  color: white;
}

.navbar ul {
  display: flex;
  list-style: none;
}

.navbar ul li {
  margin: 0 15px;
}

.navbar a {
  text-decoration: none;
  color: white;
}

.quote-btn {
  background-color: #fbbf24;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

/* Hero Section */

.hero h1 {
  color: #fbbf24;
  font-size: 50px;
}

/* Content Section */
.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 40px;
}

.text-block {
  max-width: 50%;
}

.illustration img {
  width: 300px;
}


// Services.js
import React from 'react';
import './Services.css'; // CSS styling ke liye

const services = [
  {
    title: "Custom Web Development",
    description: "We build tailored web solutions from the ground up, ensuring they are scalable and optimized for performance.",
    icon: "🛠️",
  },
  {
    title: "eCommerce Development",
    description: "From online stores to complex marketplaces, we deliver secure and user-friendly eCommerce platforms.",
    icon: "🛒",
  },
  {
    title: "CMS Development",
    description: "Our expertise includes building content management systems (CMS) such as WordPress, Joomla, and custom solutions for easy content updates.",
    icon: "📋",
  },
  {
    title: "Web Application Development",
    description: "We design and develop feature-rich web applications that provide seamless user experiences.",
    icon: "🌐",
  },
  {
    title: "Front-End & Back-End Development",
    description: "Our full-stack expertise covers everything from intuitive UI/UX designs to robust server-side functionalities.",
    icon: "💻",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2>Services We Offer:</h2>
      <p>Explore our range of services designed to bring your ideas to life with precision and innovation.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;




<!-- sec #3 -->

import React from 'react';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <WhyChooseUs />
      <CTA />
    </div>
  );
};

export default App;


import React from 'react';
import './WhyChooseUs.css';

const features = [
  {
    icon: '🧑‍💻',
    title: 'Clean and efficient code',
  },
  {
    icon: '📈',
    title: 'Scalable solutions that grow with your business',
  },
  {
    icon: '📱',
    title: 'Mobile-optimized and responsive designs',
  },
  {
    icon: '🔒',
    title: 'Secure and fast-loading websites',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h1>
        Why <span>Choose Us?</span>
      </h1>
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <p>{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;



import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Let’s build a website that drives results.</h2>
        <button className="cta-button">Contact us now →</button>
      </div>
    </section>
  );
};

export default CTA;

<!-- css -->

 
 <!-- logain form -->
 import './App.css';

function App() {
  return (
    <div className="App">
      <header className="contact-header">
        <h1>Get In <span className="highlight">Touch</span></h1>
        <p>We'd love to hear from you. Whether you have a question or are ready to start a project, reach out to us!</p>
        <div className="contact-info">
          <div>
            <button>📞 Phone: (703) 890-5429</button>
            <button>✉️ Email: info@sitevendororganizes.com</button>
            <button>📍 Office: Alexandria, VA</button>
          </div>
          <div className="social-links">
            <a href="#">📘</a>
            <a href="#">🐦</a>
            <a href="#">📷</a>
          </div>
        </div>
      </header>

      <form className="contact-form">
        <input type="text" placeholder="Your Name*" required />
        <input type="email" placeholder="Your Email*" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
      </form>

      <footer>
        <div className="footer-content">
          <p>&copy; 2024 Code Baustein. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Portfolio</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

<!-- css -->
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #1d1d1d, #2e2e2e);
  color: white;
}

.contact-header {
  text-align: center;
  padding: 20px;
}

.contact-header h1 .highlight {
  color: #f0c94c;
}

.contact-info {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.contact-info button {
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  margin: 5px;
  cursor: pointer;
}

.social-links a {
  margin: 0 10px;
  font-size: 2rem;
  text-decoration: none;
  color: white;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.contact-form input,
.contact-form textarea {
  width: 80%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: none;
}

.contact-form button {
  background-color: #f0c94c;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #1a1a1a;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.footer-links a {
  color: #f0c94c;
  margin: 0 10px;
  text-decoration: none;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
}
