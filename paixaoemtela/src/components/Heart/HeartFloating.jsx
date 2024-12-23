import React, { useEffect } from 'react';
import './HeartFloating.css'; // Import the CSS file for styling

const HeartFloating = () => {
  useEffect(() => {
    const spawnHearts = () => {
      const container = document.body;
      const heartElement = document.querySelector('.Heart');
      const rect = heartElement.getBoundingClientRect();
      const startY = rect.top + window.scrollY;

      for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        const randomOffset = Math.random() * -200;
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${startY + randomOffset}px`;
        container.appendChild(heart);

        // Remove the heart after animation
        setTimeout(() => {
          container.removeChild(heart);
        }, 2000);
      }
    };

    // Set up click event listener to spawn hearts
    const heartElement = document.querySelector('.Heart');
    if (heartElement) {
      heartElement.addEventListener('click', spawnHearts);
    }

    // Clean up event listener on component unmount
    return () => {
      if (heartElement) {
        heartElement.removeEventListener('click', spawnHearts);
      }
    };
  }, []);

  return (
    <div className="Heart"></div>
  );
};

export default HeartFloating;
