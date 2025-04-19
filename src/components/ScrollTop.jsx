import { ChevronUp, ChevronDown } from 'lucide-react';
import React, { useEffect, useState } from 'react';

function ScrollTop() {
  const [atBottom, setAtBottom] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      setAtBottom(scrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (atBottom) {

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-yellow-400 text-[#00002c] p-1 rounded-full shadow-lg hover:bg-yellow-300 transition-all z-50"
    >
      {atBottom ? <ChevronUp size={40} /> : <ChevronDown size={40} />}
    </button>
  );
}

export default ScrollTop;
