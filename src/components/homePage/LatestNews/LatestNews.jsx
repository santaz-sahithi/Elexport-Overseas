import React from 'react';
import './LatestNews.css';
import news_img1 from "../../../assests/News1Img.avif";
import news_img2 from "../../../assests/News2Img.avif";
import news_img3 from "../../../assests/News3Img.avif";

const newsData = [
  {
    date: 'Thursday, Sep 12, 2024',
    title: 'Over 49,000 Indian students studying in Germany, most in engineering: DAAD',
    image: news_img1,
    link: "https://indianexpress.com/article/education/study-abroad/germany-highest-number-of-indian-students-daad-german-academic-exchange-service-9561733/",
  },
  {
    date: 'Thursday, Sep 11, 2024',
    title: 'Australia limits international student enrollments for 2025',
    image: news_img2,
    link: "https://indianexpress.com/article/education/study-abroad/study-abroad-australia-limits-international-student-enrollments-for-2025-9535087/",
  },
  {
    date: 'Thursday, Sep 10, 2024',
    title: 'Spring intake at US universities: Benefits, deadlines, scholarships and tips',
    image: news_img3,
    link: "https://www.indiatoday.in/education-today/study-abroad/story/spring-intake-at-us-universities-benefits-deadlines-scholarships-tips-2596449-2024-09-09",
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
              <a href = {news.link} className="news-title">{news.title}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
