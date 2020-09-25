const StaggeredLines = ({groupRef, tlRef, blRef, brRef, trRef}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 2900 44">
      <g ref={groupRef} opacity="1">
        <rect ref={tlRef} width="1450" height="15" x="-333" fill="#8EEFF2" rx="7" />
        <rect ref={blRef} width="1450" height="15" x="-273" y="29" fill="#FF819D" rx="7" />
        <rect ref={trRef} width="1450" height="15" x="1733" fill="#FCE383" rx="7" />
        <rect ref={brRef} width="1450" height="15" x="1794" y="29" fill="#FFAF7E" rx="7" />
      </g>
    </svg>
  );
};

export default StaggeredLines;
