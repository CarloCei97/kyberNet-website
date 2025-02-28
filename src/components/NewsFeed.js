import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NewsCard from './NewsCard';
import './NewsFeed.css';

const newsData = [
  {
    category: "AI",
    title: "Google Unveils Next-Gen AI Assistant",
    description:
      "Google has announced a breakthrough in AI technology, introducing a next-generation AI assistant that promises more natural conversation and smarter integration across services.",
    image:
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/blog_gemini_keyword_header.width-2200.format-webp.webp",
    url: "https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/"
  },
  {
    category: "AI",
    title: "OpenAI Releases Updated GPT-5 Model",
    description:
      "OpenAI's latest GPT-5 model is set to revolutionize natural language processing with even more advanced reasoning and creative capabilities.",
    image:
      "https://img.ai4business.it/wp-content/uploads/2024/02/08175116/word-image-22367-1.jpeg.webp",
    url: "https://www.forbes.com/sites/bernardmarr/2025/02/19/openais-gpt-5-is-coming-heres-what-we-know-so-far/"
  },
  {
    category: "Data Science",
    title: "New Data Science Platform Accelerates Analytics",
    description:
      "A new data science platform promises to reduce analysis time by 50% by integrating automated machine learning workflows and real-time data visualization.",
    image:
      "https://www.microsoft.com/en-us/microsoft-fabric/blog/wp-content/uploads/2024/11/e604ed99-d03f-4dbe-b22b-735f70565137.webp",
    url: "https://www.forbes.com/sites/datascience/2025/02/28/new-data-science-platform-accelerates-analytics/"
  },
  {
    category: "Data Science",
    title: "Data Science Trends of 2025 Revealed",
    description:
      "Experts reveal the top trends in data science for 2025, including predictive analytics, AI-driven decision making, and enhanced data security measures.",
    image:
      "https://bostoninstituteofanalytics.b-cdn.net/wp-content/uploads/2025/01/Top-10-Data-Science-Trends-for-2025-Big-Datas-Next-Evolution-1.jpg",
    url: "https://bostoninstituteofanalytics.org/blog/top-10-data-science-trends-for-2025/"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const NewsFeed = () => {
  const [containerOpacity, setContainerOpacity] = useState(0);

  useEffect(() => {
    const fadeStart = 0;
    const fadeDuration = 200;

    const handleScroll = () => {
      let newOpacity = (window.scrollY - fadeStart) / fadeDuration;
      newOpacity = Math.max(0, Math.min(1, newOpacity));
      setContainerOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div className="newsfeed-container" style={{ opacity: containerOpacity }}>
      <h2 className="newsfeed-headline">Latest News</h2>
      <div className="news-cards">
        {newsData.map((article, index) => (
          <motion.div
            key={index}
            className="news-card-wrapper"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <NewsCard article={article} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NewsFeed;
