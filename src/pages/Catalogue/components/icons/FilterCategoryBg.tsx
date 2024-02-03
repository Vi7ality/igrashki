const FilterCategoryBg = ({ color }: { color: string }) => {
  return (
    <svg
      width="269"
      height="32"
      viewBox="0 0 269 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M161.076 31.4022C136.535 31.4022 111.994 29.7643 87.5852 29.7643C78.83 29.7643 70.2074 30.3412 61.5848 29.8571C48.7173 29.0099 30.666 29.849 23.1149 30.0628C15.5638 30.2766 12.9004 31.1803 7.59423 29.849C3.21661 28.7598 1.75741 27.6706 0.961476 22.9506C0.298201 18.7147 0.29825 14.4788 1.09418 10.2429C2.15542 4.91778 3.48197 3.46547 8.3902 2.73932C13.9617 1.89214 11.3682 2.16244 24.9721 1.3798C38.576 0.597168 49.5132 0.932004 61.8501 1.41611C116.637 3.47354 168.149 5.57588 226.077 1.32332C236.955 1.32332 247.965 0.597168 258.975 0.597168C265.741 0.597168 267.2 1.80742 267.996 9.311C268.394 13.5469 268.527 17.7828 267.731 22.0187C266.802 27.1017 265.343 28.312 260.7 28.7961C246.771 30.1274 232.842 29.5223 219.046 29.6433C199.679 29.8853 180.444 31.4022 161.076 31.4022Z"
        fill={color}
      />
    </svg>
  );
};

export default FilterCategoryBg;
