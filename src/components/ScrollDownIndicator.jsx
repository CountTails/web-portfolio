
const ScrollDownIndicator = ({ targetRef }) => {

  const scrollDown = () => {
    console.log(targetRef.current);
    if (targetRef.current) {
      targetRef.current.scrollTop = targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollDown}
      className='absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce'
      aria-label='Scroll down'
      aria-role='link'
      tabIndex='0'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='h-12 w-12 text-gray-600'
      >
        <polyline points='6 9 12 15 18 9'></polyline>
      </svg>
    </button>
  )
};

export default ScrollDownIndicator;
