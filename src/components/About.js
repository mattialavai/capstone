import React from 'react';
// import './app.css'; // Import main stylesheet

function About() {
  return (
    <section id="about">
      <div className="about-content">
        <div className="text-content">
          <h1>Little Lemon</h1>
          <h2>Sierra Leone</h2>
          <p>
            Little Lemon is not just a restaurant; it’s a celebration of flavors
            and traditions rooted in the heart of Sierra Leone. Nestled in the
            vibrant streets of Freetown, we bring you a taste of authentic
            Mediterranean cuisine with a modern twist. Our journey began with a
            passion for bringing people together through food, crafting dishes
            that honor timeless recipes while embracing innovation.
          </p>
        </div>
        <div className="about-images">
          <div className="about-image">
            <img
              src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/restaurant.13306fcaa4576f20fd42.jpg"
              alt="Restaurant Interior"
            />
          </div>
          <div className="about-image">
            <img
              src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Mario%20and%20Adrian%20b.6ba0e06bfa9c1ea75109.jpg"
              alt="Restaurant Interior"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
