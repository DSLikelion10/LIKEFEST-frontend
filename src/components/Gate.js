import React, { useEffect } from 'react';
import style from '../css/Gate.module.css';
import mainposter from '../img/main_poster.png';
import newduksung from '../img/image_new_duksung.png';
import follow from '../img/image_follow.png';
import female from '../img/image_female.png';
import focus from '../img/image_focus.png';
import future from '../img/image_future.png';
import forever from '../img/image_forever.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gate = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  const IMG_ARRAY = [
    { alt: follow, offset: '150', margin: '100' },
    { alt: female, offset: '200', margin: '200' },
    { alt: focus, offset: 250, margin: 300 },
    { alt: future, offset: 280, margin: 400 },
    { alt: forever, offset: 300, margin: 500 },
  ];

  return (
    <div className={style.gradient}>
      <img className={style.poster} src={mainposter} alt="포스터" />
      <div className={style.date}>2022. 05.18 - 05.20</div>
      <div className={style.line}></div>
      <div className={style.keywordDiv}>
        {IMG_ARRAY.map((data) => {
          <img
            data-aos="fade-up"
            data-aos-offset={data.offset}
            className={style.keyword2}
            src={data.alt}
            alt={data.alt}
            data-sa-margin={data.margin}
          />;
        })}
      </div>
      <img className={style.new} src={newduksung} alt="forever" />
    </div>
  );
};

export default Gate;
