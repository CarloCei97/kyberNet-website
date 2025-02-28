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
      "https://media.wired.com/photos/66e221e411ae89cc49da0490/master/w_2240,c_limit/OpenAI-Problem-Solving-Business.jpg",
    url: "https://techcrunch.com/2025/02/28/google-ai-assistant"
  },
  {
    category: "AI",
    title: "OpenAI Releases Updated GPT-5 Model",
    description:
      "OpenAI's latest GPT-5 model is set to revolutionize natural language processing with even more advanced reasoning and creative capabilities.",
    image:
      "https://www.wired.com/images/2025/02/openai-gpt5.jpg",
    url: "https://www.wired.com/story/openai-gpt5-release/"
  },
  {
    category: "Data Science",
    title: "New Data Science Platform Accelerates Analytics",
    description:
      "A new data science platform promises to reduce analysis time by 50% by integrating automated machine learning workflows and real-time data visualization.",
    image:
      "https://www.forbes.com/sites/datascience/2025/02/28/new-data-platform.jpg",
    url: "https://www.forbes.com/sites/datascience/2025/02/28/new-data-science-platform-accelerates-analytics/"
  },
  {
    category: "Data Science",
    title: "Data Science Trends of 2025 Revealed",
    description:
      "Experts reveal the top trends in data science for 2025, including predictive analytics, AI-driven decision making, and enhanced data security measures.",
    image:
      "https://www.analyticsinsight.net/wp-content/uploads/2025/02/data-science-trends.jpg",
    url: "https://www.analyticsinsight.net/data-science-trends-2025-revealed/"
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
