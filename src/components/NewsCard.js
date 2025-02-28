import React from 'react';
import './NewsCard.css';

const NewsCard = ({ article }) => {
  const handleClick = () => {
    window.open(article.url, '_blank');
  };

  return (
    <div
      className="news-card"
      onClick={handleClick}
      style={{ backgroundImage: `url(${article.image})` }}
    >
      <div className="news-card-overlay">
        <div className="news-card-content">
          <h3 className="news-card-title">{article.title}</h3>
          <p className="news-card-description">{article.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
