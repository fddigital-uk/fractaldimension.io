const Circle = ({ circleRef }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 720 720">
      <circle
        ref={circleRef}
        cx="360"
        cy="360"
        r="350"
        opacity="1"
        stroke="#DAFFDB"
        strokeDasharray="450 100"
        strokeWidth="10"
      />
    </svg>
  );
};

export default Circle;
