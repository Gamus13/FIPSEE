import React, { useEffect, useState } from 'react';
import "./CarousselAccueil.scss";
function SliderComponent() {
  const imgList = {
    'Investissement': 'https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475660_640.jpg',
    'Projets': 'https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_640.jpg',
    'Stratégie': 'https://cdn.pixabay.com/photo/2015/12/07/10/40/strategy-1080527_640.jpg',
    'Conseil & Accompagnement': 'https://cdn.pixabay.com/photo/2014/09/06/15/43/job-interview-437026_640.jpg',
    'Structuration business': 'https://i.imgur.com/ftv9Cfs.jpg',
    'Partenariat & Collaborateur': 'https://cdn.pixabay.com/photo/2017/10/13/12/29/hands-2847508_640.jpg',
    'Idée pour tous': 'https://cdn.pixabay.com/photo/2019/09/29/22/06/light-bulb-4514505_640.jpg',
    'Communaute & reseautage': 'https://cdn.pixabay.com/photo/2020/07/11/23/36/meeting-5395615_640.jpg',
  };

  const [activeKey, setActiveKey] = useState(0);

  useEffect(() => {
    const slideList = document.querySelectorAll('.slide-item');
    slideList[activeKey].classList.add('active');
  }, [activeKey]);

  async function onSlideChange(key) {
    if (key === activeKey) return;
    const slideList = document.querySelectorAll('.slide-item');
    slideList[activeKey].classList.add('leave');
    await delay(400);
    slideList[activeKey].classList.remove('leave', 'active');
    setActiveKey(key);
    slideList[key].classList.add('active');
  }

  return (
    <div className='blockwrapperkj'>
      <div className="wrapper">
        <div className="slider-wrapper">
          {Object.entries(imgList).map(([name, src], index) => (
            <div className="slide-item" key={name}>
              <img src={src} alt={name} />
              <div className="name">{name}</div>
            </div>
          ))}
        </div>
        <div className="dot-box">
          {Object.entries(imgList).map(([name, src], index) => (
            <div className="dot" title={name} key={name} onClick={() => onSlideChange(index)}>
              <img src={src} alt={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Fonction de délai
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default SliderComponent;