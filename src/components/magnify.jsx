import { useState } from 'react';

const MAGNIFY_SIZE = 200;
const MAGNIFY_SIZE_HALF = MAGNIFY_SIZE / 2;

export default function Magnify({ data, remove, image }) {
  const [magnifyStyle, setMagnifyStyle] = useState({
    backgroundImage: `url(${image})`,
  });

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;

    const xPercentage = (offsetX / offsetWidth) * 100;
    const yPercentage = (offsetY / offsetHeight) * 100;

    setMagnifyStyle((prev) => ({
      ...prev,
      display: 'block',
      top: `${offsetY - MAGNIFY_SIZE_HALF}px`,
      left: `${offsetX - MAGNIFY_SIZE_HALF}px`,
      backgroundPosition: `${xPercentage}% ${yPercentage}%`,
    }));
  };

  const handleMouseLeave = (e) => {
    setMagnifyStyle((prev) => ({ ...prev, display: 'none' }));
  };

  return (
    <div className="">
      <div className="relative border-2 border-white cursor-none">
        <img
          src={image}
          alt={image}
          width={600}
          height={600}
          draggable={false}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        />

        <div className="magnify" style={magnifyStyle}></div>
      </div>
      <button
        onClick={() => {
          data();
          remove();
        }}
      >
        Details
      </button>
    </div>
  );
}
