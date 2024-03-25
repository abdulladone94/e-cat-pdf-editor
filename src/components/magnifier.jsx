import ReactImageMagnify from 'react-image-magnify';
import watchImg1200 from '../assets/wristwatch_1200.jpg';
import watchImg300 from '../assets/wristwatch_300.jpg';

const Magnifier = () => {
  return (
    <div className="">
      <div className="w-[342px] h-[513px]">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: 'Wristwatch by Ted Baker London',
              isFluidWidth: true,
              src: watchImg300,
            },
            largeImage: {
              src: watchImg1200,
              width: 1200,
              height: 1800,
            },
          }}
        />
      </div>
    </div>
  );
};

export default Magnifier;

// import ReactImageMagnify from 'react-image-magnify';
// import treeImageS from '../assets/wristwatch_1200.jpg';
// import tre from '../assets/wristwatch_300.jpg';

// const Magnifier = () => {
//   return (
//     <ReactSlick
//       {...{
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       }}
//       {...rsProps}
//     >
//       {dataSource.map((src, index) => (
//         <div key={index}>
//           <ReactImageMagnify
//             {...{
//               smallImage: {
//                 alt: 'Wristwatch by Versace',
//                 isFluidWidth: true,
//                 src: src.small,
//                 srcSet: src.srcSet,
//                 sizes:
//                   '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
//               },
//               largeImage: {
//                 src: src.large,
//                 width: 1426,
//                 height: 2000,
//               },
//               lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
//             }}
//             {...rimProps}
//           />
//         </div>
//       ))}
//     </ReactSlick>
//   );
// };

// export default Magnifier;
