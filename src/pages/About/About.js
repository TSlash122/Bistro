import React from 'react';
import './About.css';
import { food_list, menu_list } from '../../assets/assets';
import { assets } from '../../assets/assets';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <img src={assets.food_6} alt="Delicious Food" className="about-hero-image" />
        <div className="about-hero-text">
          <h1>About Us</h1>
          <p>Your favorite meals, delivered right to your doorstep.</p>
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At <strong>Foodie's Paradise</strong>, we are passionate about bringing the best meals from your favorite local
          restaurants right to your door. Our mission is to make quality food delivery easy, convenient, and fast.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Quality:</strong> We partner with the best local restaurants to ensure that every meal is prepared with care.</li>
          <li><strong>Speed:</strong> Fast and reliable delivery, ensuring your food arrives fresh and hot.</li>
          <li><strong>Customer Satisfaction:</strong> Our top priority is delivering an excellent experience every time.</li>
          <li><strong>Sustainability:</strong> We care about the environment and are committed to reducing waste through eco-friendly practices.</li>
        </ul>
      </section>

      <section className="about-how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <img src={assets.food_10} alt="Browse restaurants" />
            <h3>Browse Restaurants</h3>
            <p>Choose from a wide variety of restaurants and cuisines available in your area.</p>
          </div>
          <div className="step">
            <img src={assets.food_20} alt="Order food" />
            <h3>Order Your Food</h3>
            <p>Select your favorite meals, customize your order, and add to your cart with ease.</p>
          </div>
          <div className="step">
            <img src={assets.food_1} alt="Fast delivery" />
            <h3>Fast Delivery</h3>
            <p>Our delivery partners will bring your order straight to your doorstep, fresh and hot.</p>
          </div>
        </div>
      </section>

      <section className="about-testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          <blockquote>
            <p>"The food is always on time and still warm. Great service, highly recommend!"</p>
            <footer>— Sarah, New York</footer>
          </blockquote>
          <blockquote>
            <p>"Amazing variety and super fast delivery. I love using Foodie's Paradise!"</p>
            <footer>— John, San Francisco</footer>
          </blockquote>
        </div>
      </section>
      
      <section className="about-cta">
        <h2>Join Our Foodie Community</h2>
        <p>Sign up today and enjoy the convenience of having your favorite meals delivered to your doorstep.</p>
        <a href="/signup" className="about-cta-button">Get Started</a>
      </section>
    </div>
  );
};

export default About;
