const Hamburger = () => {
  return (
    <svg
      width="71"
      height="62"
      viewBox="0 0 71 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_10_93)">
        <rect
          x="6.69046"
          y="3"
          width="57.619"
          height="49.8971"
          rx="13"
          fill="#50FFAF"
        />
      </g>
      <line
        x1="21.9872"
        y1="14.7647"
        x2="49.646"
        y2="14.7647"
        stroke="black"
        stroke-width="4"
        stroke-linecap="square"
      />
      <line
        x1="21.9872"
        y1="26.2353"
        x2="49.646"
        y2="26.2353"
        stroke="black"
        stroke-width="4"
        stroke-linecap="square"
      />
      <line
        x1="21.9872"
        y1="37.7059"
        x2="49.646"
        y2="37.7059"
        stroke="black"
        stroke-width="4"
        stroke-linecap="square"
      />
      <defs>
        <filter
          id="filter0_d_10_93"
          x="0.69046"
          y="0"
          width="69.619"
          height="61.8971"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_10_93"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_10_93"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_10_93"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Hamburger;
