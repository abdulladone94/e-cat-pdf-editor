import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css';

import { Parallax, Pagination, Navigation } from 'swiper/modules';
import Magnify from './magnify';

export default function Slider() {
  const [isHovered, setIsHovered] = useState(false);
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  console.log(view1);
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(https://swiperjs.com/demos/images/nature-1.jpg)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 1
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 2
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text">
            <SwiperSlide>
              <Magnify
                image={'https://swiperjs.com/demos/images/nature-2.jpg'}
                data={() => setView1(!view1)}
                remove={() => setView2(false)}
              />

              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              {view1 ? <p>Image 1</p> : ''}
            </SwiperSlide>
            <SwiperSlide>
              <Magnify
                image={'https://swiperjs.com/demos/images/nature-3.jpg'}
                data={() => setView2(!view2)}
                remove={() => setView1(false)}
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              {view2 ? <p>Image 2</p> : ''}
            </SwiperSlide>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
