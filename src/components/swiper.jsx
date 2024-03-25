import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

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
          <div
            className="text"
            // data-swiper-parallax="-100"
            // style={{
            //   'background-image':
            //     'url(https://swiperjs.com/demos/images/nature-4.jpg)',
            // }}
          >
            {/* <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div> */}
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                loading="lazy"
                onClick={() => {
                  setView2(false);
                  setView1(!view1);
                  console.log('clicked');
                }}
                // className={isHovered ? 'image-hovered' : 'image-normal'}
                // onMouseEnter={() => setIsHovered(true)}
                // onMouseLeave={() => setIsHovered(false)}
              />

              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              {view1 ? <p>Image 1</p> : ''}
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                loading="lazy"
                onClick={() => {
                  setView1(false);
                  setView2(!view2);
                  console.log('clicked');
                }}
              />
              {/* <h1>Hello world</h1> */}
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              {view2 ? <p>Image 2</p> : ''}
            </SwiperSlide>
            {/* <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                loading="lazy"
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
