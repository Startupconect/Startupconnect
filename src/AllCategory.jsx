import React, { useState, useEffect, useMemo } from 'react';
import './allcategory.css';
import axios from 'axios';

const AllCategory = () => {
  const [glow, setGlow] = useState(false);
  const [ideaText, setIdeaText] = useState(''); // Declare ideaText and setIdeaText
  const [message, setMessage] = useState(''); // Declare message and setMessage

  const mainSliderImages = [
    'https://t4.ftcdn.net/jpg/08/41/18/71/240_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg',
    'https://t4.ftcdn.net/jpg/03/08/42/97/240_F_308429705_lGIgucANJu4CbyuwBU4NaYi52ZljS853.jpg',
    'https://t4.ftcdn.net/jpg/06/99/16/35/240_F_699163564_nyG6DIOdpD4tzYDnFNtGA9RKXru1volU.jpg',
    'https://t3.ftcdn.net/jpg/08/73/95/50/240_F_873955008_3pwMEquaWNSNWB7bM3k4YEvPYiYw7flQ.jpg',
    'https://t4.ftcdn.net/jpg/04/86/51/73/240_F_486517362_5PnUw7V9eseCK0TtlZMJ6JArVuRWPhey.jpg',
  ];

  const boxSliderImages = useMemo(
    () => [
      [
        'https://t4.ftcdn.net/jpg/04/86/51/73/240_F_486517362_5PnUw7V9eseCK0TtlZMJ6JArVuRWPhey.jpg',
        'https://t4.ftcdn.net/jpg/08/41/18/71/240_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg',
        'https://t4.ftcdn.net/jpg/03/08/42/97/240_F_308429705_lGIgucANJu4CbyuwBU4NaYi52ZljS853.jpg',
        'https://t4.ftcdn.net/jpg/06/99/16/35/240_F_699163564_nyG6DIOdpD4tzYDnFNtGA9RKXru1volU.jpg',
        'https://t3.ftcdn.net/jpg/08/73/95/50/240_F_873955008_3pwMEquaWNSNWB7bM3k4YEvPYiYw7flQ.jpg',
      ],
      [
        'https://t3.ftcdn.net/jpg/08/73/95/50/240_F_873955008_3pwMEquaWNSNWB7bM3k4YEvPYiYw7flQ.jpg',
        'https://t4.ftcdn.net/jpg/04/86/51/73/240_F_486517362_5PnUw7V9eseCK0TtlZMJ6JArVuRWPhey.jpg',
        'https://t4.ftcdn.net/jpg/08/41/18/71/240_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg',
        'https://t4.ftcdn.net/jpg/03/08/42/97/240_F_308429705_lGIgucANJu4CbyuwBU4NaYi52ZljS853.jpg',
        'https://t4.ftcdn.net/jpg/06/99/16/35/240_F_699163564_nyG6DIOdpD4tzYDnFNtGA9RKXru1volU.jpg',
      ],
      [
        'https://t4.ftcdn.net/jpg/03/08/42/97/240_F_308429705_lGIgucANJu4CbyuwBU4NaYi52ZljS853.jpg',
        'https://t4.ftcdn.net/jpg/06/99/16/35/240_F_699163564_nyG6DIOdpD4tzYDnFNtGA9RKXru1volU.jpg',
        'https://t3.ftcdn.net/jpg/08/73/95/50/240_F_873955008_3pwMEquaWNSNWB7bM3k4YEvPYiYw7flQ.jpg',
        'https://t4.ftcdn.net/jpg/04/86/51/73/240_F_486517362_5PnUw7V9eseCK0TtlZMJ6JArVuRWPhey.jpg',
        'https://t4.ftcdn.net/jpg/08/41/18/71/240_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg',
      ],
      [
        'https://t4.ftcdn.net/jpg/06/99/16/35/240_F_699163564_nyG6DIOdpD4tzYDnFNtGA9RKXru1volU.jpg',
        'https://t3.ftcdn.net/jpg/08/73/95/50/240_F_873955008_3pwMEquaWNSNWB7bM3k4YEvPYiYw7flQ.jpg',
        'https://t4.ftcdn.net/jpg/04/86/51/73/240_F_486517362_5PnUw7V9eseCK0TtlZMJ6JArVuRWPhey.jpg',
        'https://t4.ftcdn.net/jpg/08/41/18/71/240_F_841187121_YwVVVaolLlkhOpKcfBLhRWvhLuqClwUS.jpg',
        'https://t4.ftcdn.net/jpg/03/08/42/97/240_F_308429705_lGIgucANJu4CbyuwBU4NaYi52ZljS853.jpg',
      ],
    ],
    []
  );

  const [mainSliderIndex, setMainSliderIndex] = useState(0);
  const [boxSliderIndices, setBoxSliderIndices] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMainSliderIndex((prev) =>
        prev === mainSliderImages.length - 1 ? 0 : prev + 1
      );
    }, 2300);
    return () => clearInterval(interval);
  }, [mainSliderImages.length]);

  useEffect(() => {
    const intervals = boxSliderImages.map((_, index) => {
      return setInterval(() => {
        setBoxSliderIndices((prev) => {
          const updated = [...prev];
          updated[index] = (updated[index] + 1) % boxSliderImages[index].length;
          return updated;
        });
      }, 2000);
    });
    return () => intervals.forEach(clearInterval);
  }, [boxSliderImages]);

  const categories = [
    { image: '/images/B2B.webp', link: '/B2B' },
    { image: '/images/B2C.webp', link: '/B2C' },
    { image: '/images/IT.webp', link: '/IT' },
    { image: '/images/healthcare.webp', link: '/Healthcare' },
    { image: '/images/Financial.webp', link: '/finance' },
    { image: '/images/Resources.webp', link: '/resource' },
    { image: '/images/energy.webp', link: '/energy' },
  ];

  const handleCategoryClick = (link) => {
    window.location.href = link;
  };

  const handleSubmitClick = async () => {
    setGlow(true);
    if (!ideaText.trim()) {
      setMessage('Please enter an idea before submitting.');
      setGlow(false);
      return;
    }
    try {
      console.log('Submitting idea:', ideaText);
      const response = await axios.post('http://localhost:5000/api/idea/submit', { ideaText });
      if (response.status === 200) {
        setMessage('Idea submitted successfully!');
        console.log('Response:', response.data);
      } else {
        console.log('Unexpected response status:', response.status);
        setMessage('Error: Unexpected response from server.');
      }
    } catch (error) {
      console.error('Error submitting the idea:', error);
      setMessage('Error submitting the idea. Please try again.');
    } finally {
      setTimeout(() => {
        setGlow(false);
        setIdeaText('');
        setMessage('');
      }, 3000);
    }
  };

  return (
    <div className="container">
      <div className="top-section">
        <div className="main-slider">
          <img src={mainSliderImages[mainSliderIndex]} alt="Main Slider" />
        </div>
        <div className="box-sliders">
          {boxSliderImages.map((slider, index) => (
            <div key={index} className="box-slider">
              <img src={slider[boxSliderIndices[index]]} alt={`Box Slider ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="bottomsection">
      <div className="bottomform">
        <h2>Start Ecosystem</h2>
        <p>
          Bringing together the entire Indian and Global Startup community
          through virtual connects, mentorship and showcase opportunities
        </p>
      </div>
        <h2>Find yours! Startup categories</h2>
        <div className="buttons-row">
          {categories.slice(0, 4).map((category, index) => (
            <div className="button" key={index} onClick={() => handleCategoryClick(category.link)}>
              <img src={category.image} alt={category.link} />
            </div>
          ))}
        </div>
        <div className="buttons-row">
          {categories.slice(4, 7).map((category, index) => (
            <div className="button" key={index} onClick={() => handleCategoryClick(category.link)}>
              <img src={category.image} alt={category.link} />
            </div>
          ))}
        </div>
      </div>
      <div className={`allcatbottom ${glow ? 'active-shadow' : ''}`}>
        <img src="/images/ideationimg.jpg" alt="botimgall" />
        <textarea
          placeholder="Enter text"
          className="input-box656"
          value={ideaText}
          onChange={(e) => setIdeaText(e.target.value)}
        />
        <button type="button" className="allcat-submit" onClick={handleSubmitClick}>
          Submit
        </button>
        {message && <p className="message124">{message}</p>}
      </div>
    </div>
  );
};

export default AllCategory;
