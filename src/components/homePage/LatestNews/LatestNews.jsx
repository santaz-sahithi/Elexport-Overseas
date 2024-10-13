import React from 'react';
import './LatestNews.css';
import australia from "../../../assests/Australia.jpg"

const newsData = [
  {
    date: 'Thursday, Sep 12, 2024',
    title: 'Over 49,000 Indian students studying in Germany, most in engineering: DAAD',
    image: australia,
  },
  {
    date: 'Thursday, Sep 11, 2024',
    title: 'Australia limits international student enrollments for 2025',
    image: australia,
  },
  {
    date: 'Thursday, Sep 10, 2024',
    title: 'Spring intake at US universities: Benefits, deadlines, scholarships and tips',
    image: australia,
  }
];

const LatestNews = () => {
  return (
    <div className="news-section">
      <h1 className="news-heading">Latest News</h1>
      <p className="news-subheading">
        Get latest updates and information on overseas education
      </p>
      <div className="news-cards">
        {newsData.map((news, index) => (
          <div className="news-card" key={index}>
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-content">
              <p className="news-date">{news.date}</p>
              <h3 className="news-title">{news.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
