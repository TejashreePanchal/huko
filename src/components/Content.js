// src/components/ContentSection.js

import React from 'react';
import '../css/Content.css';

const ContentSection = ({ image, title, description }) => {
  return (
    <div className="content-section">
      <img src={image} alt={title} className="content-image" />
      <div className="content-info">
      </div>
    </div>
  );
};

export default ContentSection;
